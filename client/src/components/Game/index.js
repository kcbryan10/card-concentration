import React, { useState } from 'react';

const cardImg = [
    {"src": "/img/bag.png"},
    {"src": "/img/clock.png"},
    {"src": "/img/diploma.png"},
    {"src": "/img/palette.png"},
    {"src": "/img/Pen.png"},
    {"src": "/img/trophy.png"}
  ]

const Game = () => {
    const [cards, setCards] = useState([])
    const [rounds, setRounds] = useState(0)

    const shuffle = () => {
        const shuffled = [...cardImg, ...cardImg]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffled)
        setRounds(0)
    }

    return (
        <div>
            <h1>Card Concentration</h1>
            <button onClick={shuffle}>Play Again</button>
            <div className='game'>
                {cards.map(card => (
                    <div className='card' key={card.id}>
                        <div>
                            <img className='icon' src={card.src} />
                            <img className='card-background' src="" />
                        </div>
                    </div>
                ))}
            </div>
            <div />
        </div>
    );
}

export default Game;