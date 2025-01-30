import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useTierListStore from "../../store/useTierListStore";
const ChampionList = ({ champions, selectedTier }) => {
    const { addChampionToTier } = useTierListStore();
    return (_jsxs("div", { children: [_jsx("h2", { children: "Ajouter un champion" }), _jsx("ul", { children: Object.keys(champions).map((championId) => {
                    const champion = champions[championId];
                    return (_jsxs("li", { children: [_jsx("img", { src: `https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`, alt: champion.name, width: 50 }), champion.name, _jsx("button", { onClick: () => addChampionToTier(selectedTier, championId), children: "Ajouter" })] }, championId));
                }) })] }));
};
export default ChampionList;
