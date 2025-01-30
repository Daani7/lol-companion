import axios from "axios";

const BASE_URL = "https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US";

export const fetchChampions = async () => {
  const response = await axios.get(`${BASE_URL}/champion.json`);
  return response.data.data;
};

export const fetchChampionById = async (id: string) => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/14.3.1/data/fr_FR/champion/${id}.json`
  );
  if (!response.ok) {
    throw new Error("Erreur lors du chargement du champion");
  }
  const data = await response.json();
  return data.data[id];
};
