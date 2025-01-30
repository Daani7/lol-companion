import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchChampionById } from "../../api/lolApi";
import "./ChampionPage.css";
const ChampionPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: champion, isLoading, error } = useQuery({
        queryKey: ["champion", id],
        queryFn: () => fetchChampionById(id),
    });
    if (isLoading)
        return _jsx("p", { children: "Chargement..." });
    if (error)
        return _jsx("p", { children: "Erreur lors du chargement" });
    return (_jsxs("div", { className: "champion-container", children: [_jsx("button", { onClick: () => navigate(-1), className: "champion-button", children: "\u2B05 Retour" }), _jsx("h1", { children: champion.name }), _jsx("img", { src: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`, alt: champion.name, className: "champion-image" }), _jsx("h2", { children: "Titre du Champion" }), _jsx("p", { children: champion.title }), _jsx("h2", { children: "Sorts :" }), _jsx("ul", { className: "spell-list", children: champion.spells.map((spell) => (_jsxs("li", { children: [_jsxs("strong", { children: [spell.name, ":"] }), " ", spell.description] }, spell.id))) })] }));
};
export default ChampionPage;
