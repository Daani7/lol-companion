import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchChampionById } from "../api/lolApi";
import { ChampionSpell } from "../types/Champion.ts";

const ChampionPage = () => {
  const { id } = useParams();
  console.log("Champion ID:", id);
  const { data: champion, isLoading, error } = useQuery({
    queryKey: ["champion", id],
    queryFn: () => fetchChampionById(id!),
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement</p>;

  return (
    <div>
      <h1>{champion.name}</h1>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
        alt={champion.name}
      />
      <p>{champion.title}</p>
      <h2>Sorts :</h2>
      <ul>
        {champion.spells.map((spell: ChampionSpell) => (
          <li key={spell.id}>
            <strong>{spell.name}:</strong> {spell.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChampionPage;
