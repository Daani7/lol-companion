import  useTierListStore  from "../../store/useTierListStore";

interface ChampionListProps {
  champions: { [id: string]: { name: string; image: { full: string } } };
  selectedTier: string;
}

const ChampionList = ({ champions, selectedTier }: ChampionListProps) => {
  const { addChampionToTier } = useTierListStore();

  return (
    <div>
      <h2>Ajouter un champion</h2>
      <ul>
        {Object.keys(champions).map((championId) => {
          const champion = champions[championId];
          return (
            <li key={championId}>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`}
                alt={champion.name}
                width={50}
              />
              {champion.name}
              <button onClick={() => addChampionToTier(selectedTier, championId)}>
                Ajouter
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChampionList;
