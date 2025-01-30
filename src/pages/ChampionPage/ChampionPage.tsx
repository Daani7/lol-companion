import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchChampionById } from "../../api/lolApi";
import { ChampionSpell } from "../../types/Champion";
import "./ChampionPage.css";

const ChampionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: champion, isLoading, error } = useQuery({
    queryKey: ["champion", id],
    queryFn: () => fetchChampionById(id!),
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement</p>;

  return (
    <div className="champion-container">
      <button onClick={() => navigate(-1)} className="champion-button">⬅ Retour</button>
      <h1>{champion.name}</h1>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
        alt={champion.name}
        className="champion-image"
      />
      <h2>Titre du Champion</h2>
      <p>{champion.title}</p>
      <h2>Sorts :</h2>
      <ul className="spell-list">
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
