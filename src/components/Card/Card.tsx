import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
  championId: string;
  championName: string;
  imageUrl: string;
}

const Card = ({ championId, championName, imageUrl }: CardProps) => {
  return (
    <div className="card">
      <Link to={`/champion/${championId}`} className="card-link">
        <img src={imageUrl} alt={championName} className="card-image" />
        <div className="card-name">{championName}</div>
      </Link>
    </div>
  );
};

export default Card;
