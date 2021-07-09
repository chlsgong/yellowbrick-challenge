import React from 'react';
import './App.css';
import ReactionButton from './ReactionButton';

const App = () => {
  return (
    <div className='App'>
      <ReactionButton onClick={() => console.log('button clicked')} />
    </div>
  );
}

export default App;
