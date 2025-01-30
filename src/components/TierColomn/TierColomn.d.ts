import './TierColomn.css';
interface Champion {
    name: string;
    champions: {
        [id: string]: {
            name: string;
            image: {
                full: string;
            };
        };
    };
    image: {
        full: string;
    };
    tierList: {
        [tier: string]: string[];
    };
}
interface TierColumnProps {
    tier: string;
    champions: {
        [id: string]: Champion;
    };
}
declare const TierColumn: ({ tier, champions }: TierColumnProps) => import("react/jsx-runtime").JSX.Element;
export default TierColumn;
