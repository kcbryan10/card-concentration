import React, { useState } from 'react';

import Game from '../components/Game';

const Main = () => {
  return (
    <main className='game-page'>
      <div className='main'>
        <Game/>
      </div>
    </main>
  );
};

export default Main;