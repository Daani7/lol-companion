type TierListState = {
    tierList: {
        [tier: string]: string[];
    };
    addChampionToTier: (tier: string, championId: string) => void;
    removeChampionFromTier: (tier: string, championId: string) => void;
};
declare const useTierListStore: import("zustand").UseBoundStore<import("zustand").StoreApi<TierListState>>;
export default useTierListStore;
