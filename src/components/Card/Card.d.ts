import './Card.css';
interface CardProps {
    championId: string;
    championName: string;
    imageUrl: string;
}
declare const Card: ({ championId, championName, imageUrl }: CardProps) => import("react/jsx-runtime").JSX.Element;
export default Card;
