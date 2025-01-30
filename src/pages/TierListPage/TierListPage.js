import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchChampions } from '../../api/lolApi';
import useTierListStore from '@store/useTierListStore';
import { DragDropContext } from '@hello-pangea/dnd';
import './TierListPage.css';
import TierColumn from '../../components/TierColomn/TierColomn';
const TierListPage = () => {
    const [selectedTier, setSelectedTier] = useState("S");
    const { addChampionToTier, removeChampionFromTier } = useTierListStore();
    const queryClient = useQueryClient();
    const { data: champions, isLoading, error } = useQuery({
        queryKey: ['champions'],
        queryFn: fetchChampions,
    });
    const addChampionMutation = useMutation({
        mutationFn: (championId) => {
            return new Promise((resolve) => {
                addChampionToTier(selectedTier, championId);
                resolve();
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['champions'] });
        },
    });
    const removeChampionMutation = useMutation({
        mutationFn: (championId) => {
            return new Promise((resolve) => {
                removeChampionFromTier(selectedTier, championId);
                resolve();
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['champions'] });
        },
    });
    if (isLoading)
        return _jsx("p", { children: "Chargement..." });
    if (error)
        return _jsx("p", { children: "Erreur lors du chargement" });
    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination)
            return;
        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return;
        }
        const championId = result.draggableId;
        const sourceTier = source.droppableId;
        const destinationTier = destination.droppableId;
        removeChampionFromTier(sourceTier, championId);
        addChampionToTier(destinationTier, championId);
    };
    return (_jsxs("div", { className: "tierlist-page", children: [_jsx("h1", { children: "Ma Tier List" }), _jsxs("div", { className: "select-tier", children: [_jsx("label", { children: "S\u00E9lectionner la cat\u00E9gorie: " }), _jsxs("select", { onChange: (e) => setSelectedTier(e.target.value), value: selectedTier, children: [_jsx("option", { value: "S", children: "S" }), _jsx("option", { value: "A", children: "A" }), _jsx("option", { value: "B", children: "B" }), _jsx("option", { value: "C", children: "C" }), _jsx("option", { value: "D", children: "D" })] })] }), _jsx("div", { className: "tier-table", children: _jsx(DragDropContext, { onDragEnd: onDragEnd, children: _jsx("div", { className: "tier-columns", children: ["S", "A", "B", "C", "D"].map((tier) => (_jsx(TierColumn, { tier: tier, champions: champions }, tier))) }) }) }), _jsxs("div", { className: "add-champion", children: [_jsx("h2", { children: "Ajouter un champion" }), _jsx("div", { className: "cards-container", children: Object.keys(champions).map((championId) => {
                            const champion = champions[championId];
                            return (_jsxs("div", { className: "card", children: [_jsx("img", { src: `https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`, alt: champion.name, width: 100 }), _jsx("div", { children: champion.name }), _jsx("button", { onClick: () => addChampionMutation.mutate(championId), children: "Ajouter" }), _jsx("button", { onClick: () => removeChampionMutation.mutate(championId), children: "Retirer" })] }, championId));
                        }) })] })] }));
};
export default TierListPage;
