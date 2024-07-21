import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CardDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    if (!location.state || !location.state.card) {
        navigate('/');
        return null;
    }
    const { card } = location.state;
    return (
        <div>
            <h1>{card.heading}</h1>
            <img src={card.image} alt={card.heading} />
            <p>{card.description}</p>
        </div>
    );
};

export default CardDetail;





