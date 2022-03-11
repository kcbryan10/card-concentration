import React, { useEffect, useState } from 'react';

import Card from '../components/Card';

const cardImg = [
  { "src": "/img/bag.png" },
  { "src": "/img/clock.png" },
  { "src": "/img/diploma.png" },
  { "src": "/img/palette.png" },
  { "src": "/img/Pen.png" },
  { "src": "/img/trophy.png" }
]

const Main = () => {
  const [cards, setCards] = useState([])
  const [rounds, setRounds] = useState(0)
  const [selectOne, setOne] = useState(null)
  const [selectTwo, setTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)


  useEffect(() => {
    if (selectOne && selectTwo) {
      setDisabled(true)
      if (selectOne.src === selectTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === selectOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          }
          )
        })
        cycleRound();

      } else {

        setTimeout(() => cycleRound(), 500)
      }
    }
  }, [selectOne, selectTwo])

  const shuffle = () => {
    const shuffled = [...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffled)
    setRounds(0)
  }

  const handleSelect = (card) => {
    selectOne ? setTwo(card) : setOne(card)
  }

  const cycleRound = () => {
    setOne(null)
    setTwo(null)
    setRounds(prevRounds => prevRounds + 1)
    setDisabled(false)
  }

  return (
    <main className='game-page'>
      <div className='main'>
        <div>
          <h1>Card Concentration</h1>
          <h3>Rounds: {rounds}</h3>
          <div className='game'>
            {cards.map(card => (
              <Card key={card.id}
                card={card}
                handleSelect={handleSelect}
                flipped={card === selectOne || card === selectTwo || card.matched}
                disabled={disabled}
              />
            ))}
          </div>
          <div />
        </div>
        <button className='play-button' onClick={shuffle}>Play!</button>
      </div>
    </main>
  );
};

export default Main;