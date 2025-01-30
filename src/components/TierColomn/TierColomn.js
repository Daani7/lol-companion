import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import useTierListStore from '@store/useTierListStore';
import './TierColomn.css';
const TierColumn = ({ tier, champions }) => {
    const { tierList } = useTierListStore();
    return (_jsx(Droppable, { droppableId: tier, children: (provided) => (_jsxs("div", { ref: provided.innerRef, ...provided.droppableProps, className: "tier-column", children: [_jsxs("h3", { className: "tier-title", children: ["Tier ", tier] }), _jsxs("ul", { className: "champion-list", children: [tierList[tier]?.map((championId, index) => {
                            const champion = champions[championId];
                            if (!champion)
                                return null;
                            return (_jsx(Draggable, { draggableId: championId, index: index, children: (provided) => (_jsxs("li", { ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps, className: "champion-item", children: [champion.image?.full && (_jsx("img", { src: `https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`, alt: champion.name, className: "champion-image" })), _jsx("span", { className: "champion-name", children: champion.name })] })) }, championId));
                        }), provided.placeholder] })] })) }));
};
export default TierColumn;
