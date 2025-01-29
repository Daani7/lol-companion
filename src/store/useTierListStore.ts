import { create } from "zustand";

type TierListState = {
  tierList: { [tier: string]: string[] };
  addChampionToTier: (tier: string, championId: string) => void;
  removeChampionFromTier: (tier: string, championId: string) => void;
};

const useTierListStore = create<TierListState>((set) => ({
  tierList: {
    S: [],
    A: [],
    B: [],
    C: [],
    D: [],
  },
  addChampionToTier: (tier, championId) =>
    set((state) => {
      const newTierList = { ...state.tierList };
      newTierList[tier].push(championId);
      return { tierList: newTierList };
    }),
  removeChampionFromTier: (tier, championId) =>
    set((state) => {
      const newTierList = { ...state.tierList };
      newTierList[tier] = newTierList[tier].filter((id) => id !== championId);
      return { tierList: newTierList };
    }),
}));

export default useTierListStore;
