import React, { useState } from 'react';

const Card = ({ card, handleSelect }) => {

    const click = () => {
        handleSelect(card)
    }

    return (
        <div className='card'>
            <div>
                <img className='icon' src={card.src} />
                <img className='card-background' src="/img/1129018.jpg" onClick={click}/>
            </div>
        </div>
    );
}

export default Card;