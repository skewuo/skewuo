interface RainbowWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    wrapperClassName?: string;
}
export declare function RainbowWrapper({ children, className, wrapperClassName, ...props }: RainbowWrapperProps): import("react/jsx-runtime").JSX.Element;
export {};
