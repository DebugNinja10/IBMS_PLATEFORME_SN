import { useEffect, useState } from 'react';
import L from 'leaflet';
import {
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
  useMap,
} from 'react-leaflet';
import { ArrowUpRight, LocateFixed, MapPin } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

type Office = {
  id: string;
  name: string;
  city: string;
  address: string;
  position: [number, number];
  markerClass: string;
};

const offices: Office[] = [
  {
    id: 'thies',
    name: 'Agence de Thiès',
    city: 'Thiès',
    address: 'Angle Serigne Fallou, Thiès, Sénégal',
    position: [14.7856494, -16.9248617],
    markerClass: 'ibms-marker--thies',
  },
  {
    id: 'dakar',
    name: 'Agence de Dakar',
    city: 'Dakar',
    address: 'Sacré-Cœur, Dakar, Sénégal',
    position: [14.7114619, -17.4688689],
    markerClass: 'ibms-marker--dakar',
  },
];

const officeBounds = L.latLngBounds(offices.map((office) => office.position));

function createOfficeIcon(markerClass: string) {
  return L.divIcon({
    className: `ibms-office-marker ${markerClass}`,
    html: '<span></span>',
    iconSize: [30, 38],
    iconAnchor: [15, 38],
    popupAnchor: [0, -34],
  });
}

function MapController({
  activeOffice,
  userPosition,
}: {
  activeOffice: Office | null;
  userPosition: [number, number] | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (activeOffice) {
      map.flyTo(activeOffice.position, 14, { duration: 0.8 });
    } else if (userPosition) {
      map.flyTo(userPosition, 14, { duration: 0.8 });
    }
  }, [activeOffice, map, userPosition]);

  return null;
}

function GoogleMapsDirections({
  office,
  origin,
}: {
  office: Office;
  origin: [number, number] | null;
}) {
  const directionsUrl = new URL('https://www.google.com/maps/dir/');
  directionsUrl.searchParams.set('api', '1');
  directionsUrl.searchParams.set('destination', office.address);
  directionsUrl.searchParams.set('travelmode', 'driving');
  if (origin) {
    directionsUrl.searchParams.set('origin', `${origin[0]},${origin[1]}`);
  }

  return (
    <a
      href={directionsUrl.toString()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-cyan-700"
    >
      Voir l’itinéraire
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function LocationsMap() {
  const [activeOffice, setActiveOffice] = useState<Office | null>(null);
  const [userPosition, setUserPosition] = useState<[number, number] | null>(null);
  const [locationMessage, setLocationMessage] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  const handleLocateMe = () => {
    setLocationMessage('');

    if (!navigator.geolocation) {
      setLocationMessage(
        'La géolocalisation n’est pas disponible sur cet appareil ou ce navigateur.'
      );
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserPosition([coords.latitude, coords.longitude]);
        setActiveOffice(null);
        setLocationMessage(
          'Votre position est affichée sur la carte et sera utilisée comme départ des itinéraires.'
        );
        setIsLocating(false);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setLocationMessage(
            'Accès à votre position refusé. Autorisez la géolocalisation dans les réglages de votre navigateur pour réessayer.'
          );
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setLocationMessage(
            'Votre position est momentanément indisponible. Vérifiez le service de localisation de votre appareil.'
          );
        } else {
          setLocationMessage(
            'La recherche de votre position a expiré. Veuillez réessayer.'
          );
        }
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container-ibms relative z-10">
        <div className="mb-9 max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Nos implantations
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-950 md:text-5xl">
            Retrouvez-<span className="text-gradient">nous.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-blue-900/75 md:text-lg">
            Deux agences pour vous accueillir à Thiès et à Dakar.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="overflow-hidden rounded-[28px] border border-blue-100 bg-blue-50 shadow-xl shadow-blue-100/60">
            <MapContainer
              bounds={officeBounds}
              boundsOptions={{ padding: [48, 48] }}
              className="ibms-locations-map"
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapController
                activeOffice={activeOffice}
                userPosition={userPosition}
              />
              {offices.map((office) => (
                <Marker
                  key={office.id}
                  position={office.position}
                  icon={createOfficeIcon(office.markerClass)}
                  title={office.name}
                  alt={office.name}
                  eventHandlers={{
                    click: () => setActiveOffice(office),
                  }}
                >
                  <Popup>
                    <div className="min-w-48">
                      <p className="font-bold text-blue-950">{office.name}</p>
                      <p className="mt-1 text-sm text-slate-600">
                        {office.address}
                      </p>
                      <div className="mt-3">
                        <GoogleMapsDirections
                          office={office}
                          origin={userPosition}
                        />
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
              {userPosition && (
                <CircleMarker
                  center={userPosition}
                  radius={9}
                  pathOptions={{
                    color: '#ffffff',
                    fillColor: '#0A4D9C',
                    fillOpacity: 1,
                    weight: 4,
                  }}
                >
                  <Tooltip permanent>Ma position</Tooltip>
                </CircleMarker>
              )}
            </MapContainer>
          </div>

          <div className="flex flex-col gap-4">
            {offices.map((office) => (
              <article
                key={office.id}
                className={`rounded-3xl border bg-white p-6 shadow-lg shadow-blue-100/50 transition-colors ${
                  activeOffice?.id === office.id
                    ? 'border-blue-400'
                    : 'border-blue-100'
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    setActiveOffice(office);
                  }}
                  aria-pressed={activeOffice?.id === office.id}
                  className="flex w-full items-start gap-4 text-left"
                >
                  <span
                    className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                      office.id === 'thies'
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-cyan-50 text-cyan-700'
                    }`}
                  >
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-widest text-blue-600">
                      {office.city}
                    </span>
                    <span className="mt-1 block text-lg font-extrabold text-blue-950">
                      {office.name}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-slate-600">
                      {office.address}
                    </span>
                  </span>
                </button>
                <div className="ml-[60px] mt-4">
                  <GoogleMapsDirections
                    office={office}
                    origin={userPosition}
                  />
                </div>
              </article>
            ))}

            <div className="rounded-3xl bg-gradient-to-br from-blue-950 to-blue-800 p-6 text-white shadow-lg shadow-blue-900/15">
              <h3 className="text-lg font-bold">Vous êtes à proximité ?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Autorisez votre navigateur à accéder à votre position pour la
                visualiser sur la carte.
              </p>
              <button
                type="button"
                onClick={handleLocateMe}
                disabled={isLocating}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-900 transition-colors hover:bg-blue-50 disabled:cursor-wait disabled:opacity-70"
              >
                <LocateFixed className="h-4 w-4" aria-hidden="true" />
                {isLocating ? 'Localisation en cours…' : 'Ma position'}
              </button>
              {locationMessage && (
                <p
                  role="status"
                  aria-live="polite"
                  className="mt-3 text-sm leading-relaxed text-white/90"
                >
                  {locationMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
