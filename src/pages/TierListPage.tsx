import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchChampions } from "../api/lolApi";
import useTierListStore from "../store/useTierListStore";

const TierListPage = () => {
  const [selectedTier, setSelectedTier] = useState("S");
  const { tierList, addChampionToTier, removeChampionFromTier } = useTierListStore();
  const { data: champions, isLoading, error } = useQuery({
    queryKey: ["champions"],
    queryFn: fetchChampions,
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement</p>;

  return (
    <div>
      <h1>Ma Tier List</h1>

      <div>
        <label>Sélectionner une tier : </label>
        <select onChange={(e) => setSelectedTier(e.target.value)} value={selectedTier}>
          <option value="S">S</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>

      <div>
        <h2>Tier {selectedTier}</h2>
        <ul>
          {tierList[selectedTier].map((championId) => {
            const champion = champions[championId];
            return (
              <li key={championId}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`}
                  alt={champion.name}
                  width={50}
                />
                {champion.name}
                <button onClick={() => removeChampionFromTier(selectedTier, championId)}>
                  Retirer
                </button>
              </li>
            );
          })}
        </ul>
      </div>

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
    </div>
  );
};

export default TierListPage;
