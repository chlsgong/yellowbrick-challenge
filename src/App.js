import React from 'react';
import './App.css';
import ReactionButton from './components/ReactionButton';

const App = () => {
  return (
    <div className='App'>
      <ReactionButton title='Star' onClick={() => console.log('button clicked')} />
    </div>
  );
}

export default App;
