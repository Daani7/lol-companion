import { create } from "zustand";
const useTierListStore = create((set) => ({
    tierList: {
        S: [],
        A: [],
        B: [],
        C: [],
        D: [],
    },
    addChampionToTier: (tier, championId) => set((state) => {
        const newTierList = { ...state.tierList };
        if (!newTierList[tier].includes(championId)) {
            newTierList[tier].push(championId);
        }
        return { tierList: newTierList };
    }),
    removeChampionFromTier: (tier, championId) => set((state) => {
        const newTierList = { ...state.tierList };
        newTierList[tier] = newTierList[tier].filter((id) => id !== championId);
        return { tierList: newTierList };
    }),
}));
export default useTierListStore;
