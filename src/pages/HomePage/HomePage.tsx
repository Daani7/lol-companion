import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchChampions } from '../../api/lolApi';
import Card from '../../components/Card/Card';
import './HomePage.css';

const HomePage = () => {
  const { data: champions, isLoading, error } = useQuery({
    queryKey: ['champions'],
    queryFn: fetchChampions,
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement</p>;

  return (
    <div className="homepage">
      <h1>Liste des Champions</h1>
      <div className="cards-container">
        {Object.keys(champions).map((championId) => {
          const champion = champions[championId];
          return (
            <Card
              key={championId}
              championId={championId}
              championName={champion.name}
              imageUrl={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
