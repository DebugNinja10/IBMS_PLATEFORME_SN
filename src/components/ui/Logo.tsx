type LogoProps = {
  className?: string;
  variant?: 'dark' | 'light';
};

export function Logo({
  className = '',
  variant = 'dark',
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center rounded-lg ${
        variant === 'light' ? 'bg-white px-2 py-1.5' : ''
      } ${className}`}
    >
      <img
        src="/assets/images/logos/ibms-logo.png"
        alt="IBMS — Informatic Business and Management Skills"
        className="h-auto w-[100px] sm:w-[120px] md:w-[145px] object-contain"
      />
    </span>
  );
}