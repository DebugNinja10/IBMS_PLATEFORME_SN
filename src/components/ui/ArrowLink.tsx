import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ArrowLinkProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
  variant?: 'dark' | 'light' | 'blue';
};

export function ArrowLink({ children, to, href, className = '', variant = 'dark' }: ArrowLinkProps) {
  const color = variant === 'light' ? 'text-ibms-white' : variant === 'blue' ? 'text-ibms-blue' : 'text-ibms-ink';
  const hoverColor = variant === 'light' ? 'hover:text-ibms-cyan' : 'hover:text-ibms-blue';
  const content = (
    <>
      <span className="border-b border-current/20 pb-0.5 transition-colors duration-300 group-hover:border-current">
        {children}
      </span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-ibms group-hover:translate-x-1" strokeWidth={2} />
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`group inline-flex items-center gap-2 text-sm font-semibold ${color} ${hoverColor} transition-all duration-300 ease-ibms hover:gap-3 ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href ?? '#'}
      className={`group inline-flex items-center gap-2 text-sm font-semibold ${color} ${hoverColor} transition-all duration-300 ease-ibms hover:gap-3 ${className}`}
    >
      {content}
    </a>
  );
}
