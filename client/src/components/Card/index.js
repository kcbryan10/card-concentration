import React from 'react';

const Card = ({ card, handleSelect, flipped, disabled}) => {

    const click = () => {
        if(!disabled) {
            handleSelect(card)
        }   
    }

    return (
        <div className='card'>
            <div className={flipped ? "flipped" : ""}>
                <img className='icon' src={card.src} />
                <img className='card-background' src="/img/black-square.png" onClick={click}/>
            </div>
        </div>
    );
}

export default Card;