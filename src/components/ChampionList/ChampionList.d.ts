interface ChampionListProps {
    champions: {
        [id: string]: {
            name: string;
            image: {
                full: string;
            };
        };
    };
    selectedTier: string;
}
declare const ChampionList: ({ champions, selectedTier }: ChampionListProps) => import("react/jsx-runtime").JSX.Element;
export default ChampionList;
