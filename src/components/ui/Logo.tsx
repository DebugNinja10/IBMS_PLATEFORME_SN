type LogoProps = {
  className?: string;
  variant?: 'dark' | 'light';
};

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/assets/images/logos/ibms-logo.png"
      alt="IBMS — Informatic Business and Management Skills"
      className={`w-[180px] h-auto object-contain ${className}`}
    />
  );
}