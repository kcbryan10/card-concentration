import React, { useEffect, useState } from 'react';

import Auth from '../utils/auth';
import Card from '../components/Card';
import { useMutation } from '@apollo/client';
import { SUBMIT_SCORE } from '../utils/mutations';
import { QUERY_SCORES } from '../utils/queries';

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

  const loggedIn = Auth.loggedIn();


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

    setOne(null)
    setTwo(null)
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

  useEffect(() => {
    shuffle()
  }, [])


  //score submiting
  
  const [score, setScore] = useState(0);

  const [submitScore, { error }] = useMutation(SUBMIT_SCORE, {
      update(cache, { data: { submitScore }}) {
          try {
              const { scores } = cache.readQuery({ query: QUERY_SCORES });
              cache.writeQuery({
                  query: QUERY_SCORES,
                  data: { scores: [submitScore, ...scores]},
              });
          }   catch (e) {
              console.error(e);
          }

      }
  })

  const handleScoreSubmit = async (event) => {
      event.preventDefault();
      console.log(event.target.value)
      try {
        await submitScore({
          variables: { score },
        });
  
        setScore('');
      } catch (e) {
        console.error(e);
      }
  
    };


  return (
    <main className='game-page'>
              <div className='main'>
              <div>
                <h1>Card Concentration</h1>
                <h3>Score: {rounds}</h3>
                 {loggedIn && (
                   <button className='submit-score' onclick={handleScoreSubmit}> Submit score</button>
                 )}
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