import { Draggable, Droppable } from "@hello-pangea/dnd";
import  useTierListStore  from '@store/useTierListStore';
import './TierColomn.css';

interface Champion {
  name: string;
  champions: { [id: string]: { name: string; image: { full: string } } };
  image: { full: string };
  tierList: { [tier: string]: string[] };
}

interface TierColumnProps {
  tier: string;
  champions: { [id: string]: Champion };
}

const TierColumn = ({ tier, champions }: TierColumnProps) => {
  const { tierList } = useTierListStore();

  return (
    <Droppable droppableId={tier}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="tier-column"
        >
          <h3 className="tier-title">Tier {tier}</h3>
          <ul className="champion-list">
            {tierList[tier]?.map((championId, index) => {
              const champion = champions[championId];

              if (!champion) return null;

              return (
                <Draggable key={championId} draggableId={championId} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="champion-item"
                    >
                      {champion.image?.full && (
                        <img
                          src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`}
                          alt={champion.name}
                          className="champion-image"
                        />
                      )}
                      <span className="champion-name">{champion.name}</span>
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        </div>
      )}
    </Droppable>
  );
};

export default TierColumn;
