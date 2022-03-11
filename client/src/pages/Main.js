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

 
  useEffect(() => {
    if (selectOne && selectTwo) {
      if(selectOne.src === selectTwo.src) {
        console.log('they match!')
        cycleRound()
      } else {
        console.log('no match!')
        cycleRound()
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
    setRounds(prevRounds => prevRounds +1)
  }

  return (
    <main className='game-page'>
      <div className='main'>
        <div>
          <h1>Card Concentration</h1>
          <button onClick={shuffle}>Play Again</button>
          <div className='game'>
            {cards.map(card => (
              <Card key={card.id} card={card} handleSelect={handleSelect}/>
            ))}
          </div>
          <div />
        </div>
      </div>
    </main>
  );
};

export default Main;