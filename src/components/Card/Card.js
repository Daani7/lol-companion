import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import './Card.css';
const Card = ({ championId, championName, imageUrl }) => {
    return (_jsx("div", { className: "card", children: _jsxs(Link, { to: `/champion/${championId}`, className: "card-link", children: [_jsx("img", { src: imageUrl, alt: championName, className: "card-image" }), _jsx("div", { className: "card-name", children: championName })] }) }));
};
export default Card;
