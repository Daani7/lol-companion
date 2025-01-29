import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchChampions } from "@api/lolApi";

const HomePage = () => {
  const { data: champions, isLoading, error } = useQuery({
    queryKey: ["champions"],
    queryFn: fetchChampions,
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement</p>;

  return (
    <div>
      <h1>Liste des Champions</h1>
      <ul>
        {Object.keys(champions).map((championKey) => (
          <li key={championKey}>
            <Link to={`/champion/${championKey}`}>
              {champions[championKey].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
