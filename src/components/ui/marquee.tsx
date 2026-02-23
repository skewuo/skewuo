import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  speed?: number; // Speed multiplier
  direction?: 'left' | 'right';
}

export default function Marquee({
  className,
  pauseOnHover = false,
  children,
  speed = 1,
  direction = 'left'
}: MarqueeProps) {
  const baseSpeed = 40; // Base animation duration in seconds
  const duration = baseSpeed / speed;
  
  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden",
        pauseOnHover && "hover:[--pause:paused]"
      )}
      style={{ 
        '--duration': `${duration}s`,
        '--direction': direction === 'left' ? 'normal' : 'reverse',
        '--play-state': 'var(--pause, running)'
      } as React.CSSProperties}
    >
      <div 
        className={cn(
          "flex min-w-full shrink-0",
          "animate-[marquee_var(--duration)_linear_infinite]",
          "motion-reduce:animate-none",
          "[animation-direction:var(--direction)]",
          "[animation-play-state:var(--play-state)]"
        )}
      >
        <div className={cn("flex min-w-full shrink-0 items-center justify-around gap-4", className)}>
          {children}
        </div>
        <div className={cn("flex min-w-full shrink-0 items-center justify-around gap-4", className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
