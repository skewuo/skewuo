interface MarqueeProps {
    className?: string;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    speed?: number;
    direction?: 'left' | 'right';
}
export default function Marquee({ className, pauseOnHover, children, speed, direction }: MarqueeProps): import("react/jsx-runtime").JSX.Element;
export {};
