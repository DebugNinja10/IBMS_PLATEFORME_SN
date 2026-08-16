import { useCounter } from '@/hooks/useAnimations';

type CounterProps = {
  target: number;
  suffix?: string;
  className?: string;
};

export function Counter({ target, suffix = '', className = '' }: CounterProps) {
  const [ref, value] = useCounter(target);
  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
