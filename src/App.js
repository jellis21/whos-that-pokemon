import './App.css';
import AboveScreen from './components/AboveScreen/AboveScreen';
import Screen from './components/Screen/Screen'
import BelowScreen from './components/BelowScreen/BelowScreen';
import { useEffect, useState } from 'react';


function App() {
  


  return (
    <div className="App">
      <AboveScreen />
      <Screen />
      <BelowScreen />
    </div>
  );
}

export default App;
