import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery } from '@tanstack/react-query';
import { fetchChampions } from '../../api/lolApi';
import Card from '../../components/Card/Card';
import './HomePage.css';
const HomePage = () => {
    const { data: champions, isLoading, error } = useQuery({
        queryKey: ['champions'],
        queryFn: fetchChampions,
    });
    if (isLoading)
        return _jsx("p", { children: "Chargement..." });
    if (error)
        return _jsx("p", { children: "Erreur lors du chargement" });
    return (_jsxs("div", { className: "homepage", children: [_jsx("h1", { children: "Liste des Champions" }), _jsx("div", { className: "cards-container", children: Object.keys(champions).map((championId) => {
                    const champion = champions[championId];
                    return (_jsx(Card, { championId: championId, championName: champion.name, imageUrl: `https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}` }, championId));
                }) })] }));
};
export default HomePage;
