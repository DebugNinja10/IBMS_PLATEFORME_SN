import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  ContactShadows,
  Html,
  OrbitControls,
  useAnimations,
  useGLTF,
} from '@react-three/drei';
import * as THREE from 'three';

function DeskModel() {
  const { scene } = useGLTF('/models/ibms-desk.glb');

  return (
    <group position={[0.65, -0.58, -0.35]} scale={0.82}>
      <primitive object={scene} />
    </group>
  );
}

function RobotModel() {
  const robotRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/models/ibms-robot.glb');
  const { actions } = useAnimations(animations, robotRef);

  const boneNames = [
    'Head',
    'Neck',
    'UpperArm.L',
    'LowerArm.L',
    'UpperArm.R',
    'LowerArm.R',
    'Hand.L',
    'Hand.R',
  ] as const;

  type BoneName = (typeof boneNames)[number];

  const bonesRef = useRef<Partial<Record<BoneName, THREE.Bone>>>({});
  const basePoseRef = useRef<Map<THREE.Bone, THREE.Quaternion>>(new Map());
  const poseReadyRef = useRef(false);

  useEffect(() => {
    const sitting = actions['Sitting'];
    const action = sitting ?? actions['Idle'];

    if (!action) return;

    action.reset();
    action.setLoop(
      sitting ? THREE.LoopOnce : THREE.LoopRepeat,
      sitting ? 1 : Infinity,
    );
    action.clampWhenFinished = true;
    action.fadeIn(0.6).play();

    const found: Partial<Record<BoneName, THREE.Bone>> = {};

    scene.traverse((object) => {
      const candidate = object as THREE.Bone;

      if (
        candidate.isBone &&
        boneNames.includes(candidate.name as BoneName) &&
        !found[candidate.name as BoneName]
      ) {
        found[candidate.name as BoneName] = candidate;
      }
    });

    bonesRef.current = found;
    poseReadyRef.current = false;

    // Attend la fin de la mise en position assise avant de mémoriser
    // les rotations de référence des articulations.
    const captureTimer = window.setTimeout(() => {
      const basePose = new Map<THREE.Bone, THREE.Quaternion>();

      Object.values(found).forEach((bone) => {
        if (bone) basePose.set(bone, bone.quaternion.clone());
      });

      basePoseRef.current = basePose;
      poseReadyRef.current = true;
    }, (action.getClip().duration + 0.2) * 1000);

    return () => {
      window.clearTimeout(captureTimer);
      action.stop();
      poseReadyRef.current = false;
    };
  }, [actions, scene]);

  useFrame((state) => {
    if (!robotRef.current) return;

    const time = state.clock.elapsedTime;

    robotRef.current.rotation.y =
      Math.PI / 2 + Math.sin(time * 0.3) * 0.008;

    if (!poseReadyRef.current) return;

    // Une invitation toutes les 18 secondes : la tête se tourne
    // progressivement vers le visiteur, puis revient vers l'écran.
    const phase = time % 18;
    const lookingAtVisitor =
      phase > 6 && phase < 11
        ? Math.sin(((phase - 6) / 5) * Math.PI)
        : 0;

    const poseBone = (
      name: BoneName,
      axis: THREE.Vector3,
      angle: number,
    ) => {
      const bone = bonesRef.current[name];
      if (!bone) return;

      const base = basePoseRef.current.get(bone);
      if (!base) return;

      bone.quaternion
        .copy(base)
        .multiply(
          new THREE.Quaternion().setFromAxisAngle(axis, angle),
        );
    };

    // Rotation de tête douce, sans faire pivoter le corps entier.
    poseBone('Head', new THREE.Vector3(0, 1, 0), lookingAtVisitor * 0.24);
    poseBone('Neck', new THREE.Vector3(0, 1, 0), lookingAtVisitor * 0.08);

    // Petits gestes alternés pour évoquer la frappe au clavier.
    // Leur amplitude reste volontairement faible pour préserver la pose assise.
    const typingLeft = Math.sin(time * 2.2) * 0.045;
    const typingRight = Math.sin(time * 2.2 + Math.PI) * 0.045;

    poseBone('UpperArm.L', new THREE.Vector3(1, 0, 0), typingLeft * 0.25);
    poseBone('LowerArm.L', new THREE.Vector3(0, 0, 1), typingLeft);
    poseBone('Hand.L', new THREE.Vector3(0, 0, 1), typingLeft * 0.5);

    poseBone('UpperArm.R', new THREE.Vector3(1, 0, 0), typingRight * 0.25);
    poseBone('LowerArm.R', new THREE.Vector3(0, 0, 1), typingRight);
    poseBone('Hand.R', new THREE.Vector3(0, 0, 1), typingRight * 0.5);
  });

  return (
    <group
      ref={robotRef}
      position={[-0.48, -0.20, -0.15]}
      scale={0.36}
    >
      <primitive object={scene} />
    </group>
  );
}

function CodeOnScreen() {
  return (
    <Html
      transform
      position={[0.56, 0.2, 0.105]}
      rotation={[0, 0, 0]}
      distanceFactor={1.7}
      style={{
        width: '260px',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      <div className="overflow-hidden rounded-md border border-sky-300/40 bg-[#0B1830] font-mono text-[10px] leading-[1.7] text-slate-100 shadow-[0_0_22px_rgba(56,189,248,0.2)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#14243D] px-3 py-2 text-[9px] text-slate-300">
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="ml-2">ibms_ai.py</span>
          <span className="ml-auto text-sky-300">Python</span>
        </div>

        <div className="space-y-0 px-3 py-2">
          <div>
            <span className="text-fuchsia-300">class</span>{' '}
            <span className="text-amber-200">IBMSAI</span>:
          </div>
          <div className="pl-3">
            <span className="text-fuchsia-300">def</span>{' '}
            <span className="text-sky-300">build</span>(self):
          </div>
          <div className="pl-6">
            project = <span className="text-emerald-300">"Senegal"</span>
          </div>
          <div className="pl-6">
            innovation = <span className="text-orange-200">True</span>
          </div>
          <div className="pl-6">
            <span className="text-fuchsia-300">return</span> project
          </div>

          <div className="mt-2 border-t border-white/10 pt-2 text-emerald-300">
            <span>{'>'} Generating solutions</span>
            <span
              className="ml-1 inline-block animate-pulse text-sky-300"
              aria-hidden="true"
            >
              ▍
            </span>
          </div>
        </div>
      </div>
    </Html>
  );
}

function SceneContent() {
  return (
    <>
      {/* Aucun fond imposé : le Hero reste visible derrière la scène. */}
      <ambientLight intensity={1.7} />

      <directionalLight
        position={[3, 5, 4]}
        intensity={2.5}
        color="#FFFFFF"
      />

      <pointLight
        position={[-2, 2, 2]}
        intensity={8}
        color="#73DDF5"
      />

      <pointLight
        position={[2, 1.5, -1]}
        intensity={5}
        color="#A9C8FF"
      />

      <Suspense fallback={null}>
        <DeskModel />
        <RobotModel />
        <CodeOnScreen />

        <ContactShadows
          position={[0, -0.48, 0]}
          opacity={0.2}
          scale={4}
          blur={2.5}
          far={3}
        />
      </Suspense>
    </>
  );
}

function LoadingScene() {
  return (
    <Html center>
      <div className="whitespace-nowrap rounded-full border border-sky-200/60 bg-white/70 px-4 py-2 text-xs text-slate-600 shadow-sm backdrop-blur-sm">
        Chargement de l'espace 3D…
      </div>
    </Html>
  );
}

export function IBMSRobot() {
  const controlsRef = useRef<any>(null);
  const voiceEnabledRef = useRef(false);
  const lastSpokenAt = useRef(0);

  const [invitationVisible, setInvitationVisible] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [voiceAvailable, setVoiceAvailable] = useState(false);

  useEffect(() => {
    setVoiceAvailable(
      typeof window !== 'undefined' &&
      'speechSynthesis' in window &&
      'SpeechSynthesisUtterance' in window,
    );
  }, []);

  const speakInvitation = () => {
    if (
      typeof window === 'undefined' ||
      !('speechSynthesis' in window)
    ) {
      return;
    }

    // Évite les déclenchements vocaux rapprochés.
    const now = Date.now();
    if (now - lastSpokenAt.current < 2500) return;
    lastSpokenAt.current = now;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      'Héé ! Viens coder avec IBMS !',
    );

    utterance.lang = 'fr-FR';
    utterance.rate = 0.82;
    utterance.pitch = 1.05;

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    let hideTimer: number | undefined;

    const showInvitation = () => {
      setInvitationVisible(true);

      if (hideTimer !== undefined) {
        window.clearTimeout(hideTimer);
      }

      hideTimer = window.setTimeout(() => {
        setInvitationVisible(false);
      }, 5200);

      if (voiceEnabledRef.current) {
        speakInvitation();
      }
    };

    const firstInvitation = window.setTimeout(showInvitation, 6500);
    const invitationInterval = window.setInterval(showInvitation, 18000);

    return () => {
      window.clearTimeout(firstInvitation);
      window.clearInterval(invitationInterval);

      if (hideTimer !== undefined) {
        window.clearTimeout(hideTimer);
      }
    };
  }, []);

  const handleVoiceClick = () => {
    if (!voiceAvailable) return;

    if (!voiceEnabledRef.current) {
      voiceEnabledRef.current = true;
      setVoiceEnabled(true);
    }

    speakInvitation();
  };

  return (
    <div className="relative h-[470px] w-full md:h-[560px]">
      <Canvas
        camera={{
          position: [0, 1.15, 4.6],
          fov: 38,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          premultipliedAlpha: true,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1;
        }}
        fallback={
          <div className="p-6 text-sm text-slate-600">
            Cette scène nécessite un navigateur compatible WebGL.
          </div>
        }
      >
        <Suspense fallback={<LoadingScene />}>
          <SceneContent />
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          makeDefault
          target={[0, 0.35, 0]}
          enablePan={false}
          enableRotate
          enableZoom
          minDistance={3}
          maxDistance={7}
          minPolarAngle={0.45}
          maxPolarAngle={Math.PI / 2.02}
          rotateSpeed={0.7}
          zoomSpeed={0.7}
          dampingFactor={0.08}
          enableDamping
        />
      </Canvas>

      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute right-3 top-4 z-10 max-w-[260px] transition-all duration-700 ${
          invitationVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-2 opacity-0'
        }`}
      >
        <div className="rounded-2xl border border-sky-200/80 bg-white/90 px-4 py-3 text-slate-800 shadow-lg shadow-sky-900/10 backdrop-blur-md">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-600">
            IBMS vous invite
          </p>
          <p className="mt-1 text-sm font-semibold">
            Héé ! Viens coder avec IBMS !
          </p>
          <p className="mt-1 text-xs text-slate-500">
            L’innovation commence avec toi.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-full border border-slate-300/40 bg-white/35 px-3 py-1.5 text-[10px] font-medium tracking-wide text-slate-700 backdrop-blur-sm">
          IBMS · AI WORKSPACE
        </span>

        <span className="rounded-full border border-sky-300/30 bg-white/35 px-3 py-1.5 text-[10px] text-slate-700 backdrop-blur-sm">
          Glisser pour tourner · Molette pour zoomer
        </span>
      </div>

      <button
        type="button"
        onClick={handleVoiceClick}
        disabled={!voiceAvailable}
        className="absolute bottom-14 right-3 z-20 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-xs font-semibold text-sky-800 shadow-md backdrop-blur transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-60"
        aria-label="Écouter l'invitation du robot IBMS"
      >
        {!voiceAvailable
          ? 'Voix indisponible'
          : voiceEnabled
            ? '🔊 Réécouter l’invitation'
            : '🔊 Activer la voix'}
      </button>
    </div>
  );
}

useGLTF.preload('/models/ibms-desk.glb');
useGLTF.preload('/models/ibms-robot.glb');
