import React, { useState } from 'react';

const cardImg = [ 
 "poop",
 "fart",
 "stink",
 "butt",
 "turd",
 "toilet"
]

const Main = () => {
  const [cards, setCards] = useState([])
  const [rounds, setRounds] = useState(0)

const shuffle = () => {
  const shuffled= [...cardImg, ...cardImg]
  .sort(()=> Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random() }))

  setCards(shuffled)
  setRounds(0)
}

console.log(cards, rounds)

  return (
    <main className='game-page'>
      <div className='main'>
        <h1>Card Concentration</h1>
        <button onClick={shuffle}>Play Again</button>
        <div />
      </div>
    </main>
  );
};

export default Main;