import axios from "axios";

const BASE_URL = "https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US";

export const fetchChampions = async () => {
  const response = await axios.get(`${BASE_URL}/champion.json`);
  return response.data.data; // Liste des champions
};

export const fetchChampionById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/champion/${id}.json`);
  return response.data.data[id]; // Détails du champion
};
