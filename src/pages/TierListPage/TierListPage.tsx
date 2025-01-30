import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchChampions } from '../../api/lolApi';
import useTierListStore from '@store/useTierListStore';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import './TierListPage.css';
import TierColumn from '../../components/TierColomn/TierColomn';

const TierListPage = () => {
  const [selectedTier, setSelectedTier] = useState("S");
  const { addChampionToTier, removeChampionFromTier } = useTierListStore();
  const queryClient = useQueryClient();

  const { data: champions, isLoading, error } = useQuery({
    queryKey: ['champions'],
    queryFn: fetchChampions,
  });

  const addChampionMutation = useMutation({
    mutationFn: (championId: string) => {
      return new Promise<void>((resolve) => {
        addChampionToTier(selectedTier, championId);
        resolve();
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['champions'] });
    },
  });

  const removeChampionMutation = useMutation({
    mutationFn: (championId: string) => {
      return new Promise<void>((resolve) => {
        removeChampionFromTier(selectedTier, championId);
        resolve();
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['champions'] });
    },
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement</p>;

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const championId = result.draggableId;

    const sourceTier = source.droppableId;
    const destinationTier = destination.droppableId;

    removeChampionFromTier(sourceTier, championId);

    addChampionToTier(destinationTier, championId);
  };

  return (
    <div className="tierlist-page">
      <h1>Ma Tier List</h1>

      <div className="select-tier">
        <label>Sélectionner la catégorie: </label>
        <select onChange={(e) => setSelectedTier(e.target.value)} value={selectedTier}>
          <option value="S">S</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>

      <div className="tier-table">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="tier-columns">
            {["S", "A", "B", "C", "D"].map((tier) => (
              <TierColumn
                key={tier}
                tier={tier}
                champions={champions}
              />
            ))}
          </div>
        </DragDropContext>
      </div>

      <div className="add-champion">
        <h2>Ajouter un champion</h2>
        <div className="cards-container">
          {Object.keys(champions).map((championId) => {
            const champion = champions[championId];
            return (
              <div key={championId} className="card">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`}
                  alt={champion.name}
                  width={100}
                />
                <div>{champion.name}</div>
                <button
                  onClick={() => addChampionMutation.mutate(championId)}
                >
                  Ajouter
                </button>
                <button
                  onClick={() => removeChampionMutation.mutate(championId)}
                >
                  Retirer
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TierListPage;
