interface Avatar {
    imageUrl: string;
    profileUrl: string;
}
interface AvatarCirclesProps {
    className?: string;
    numPeople?: number;
    avatarUrls: Avatar[];
}
declare const AvatarCircles: ({ numPeople, className, avatarUrls, }: AvatarCirclesProps) => import("react/jsx-runtime").JSX.Element;
export default AvatarCircles;
