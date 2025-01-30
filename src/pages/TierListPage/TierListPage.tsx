import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchChampions } from "../../api/lolApi";
import useTierListStore from "../../store/useTierListStore";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

const TierListPage = () => {
  const [selectedTier, setSelectedTier] = useState("S");
  const { tierList, addChampionToTier } = useTierListStore();
  const { data: champions, isLoading, error } = useQuery({
    queryKey: ["champions"],
    queryFn: fetchChampions,
  });

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur lors du chargement</p>;

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const championId = tierList[source.droppableId][source.index];

    const updatedSourceList = [...tierList[source.droppableId]];
    updatedSourceList.splice(source.index, 1);

    const updatedDestinationList = [...tierList[destination.droppableId]];
    updatedDestinationList.splice(destination.index, 0, championId);

    useTierListStore.setState((state) => {
      const newTierList = { ...state.tierList };
      newTierList[source.droppableId] = updatedSourceList;
      newTierList[destination.droppableId] = updatedDestinationList;
      return { tierList: newTierList };
    });
  };

  return (
    <div>
      <h1>Ma Tier List</h1>

      <div>
        <label>Sélectionner la catégorie: </label>
        <select onChange={(e) => setSelectedTier(e.target.value)} value={selectedTier}>
          <option value="S">S</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: "flex" }}>
          {["S", "A", "B", "C", "D"].map((tier) => (
            <Droppable key={tier} droppableId={tier}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ width: 200, margin: "10px", backgroundColor: "#f4f4f4" }}
                >
                  <h2>Tier {tier}</h2>
                  <ul>
                    {tierList[tier].map((championId, index) => {
                      const champion = champions[championId];
                      return (
                        <Draggable key={championId} draggableId={championId} index={index}>
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                padding: "10px",
                                marginBottom: "10px",
                                backgroundColor: "#fff",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                              }}
                            >
                              <img
                                src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`}
                                alt={champion.name}
                                width={50}
                              />
                              {champion.name}
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
          ))}
        </div>
      </DragDropContext>

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
