import React, { useState, useEffect } from 'react';
import './App.css';
import WorldShaper from './classes/WorldShaper';
import Grid from './ui/Grid';
import { World } from './types/World';


const App: React.FC = () => {

  const initialEntities = { friendlies: 0, hostiles: 0 };
  const initialWorldSize = { height: 8, width: 8 };
  const initialFoodCount = 1;
  const initialWorld = WorldShaper.newWorld(initialWorldSize, initialEntities, initialFoodCount);

  const [entities, setEntities] = useState(initialEntities);
  const [worldSize, setWorldSize] = useState(initialWorldSize);
  const [foodCount, setFoodCount] = useState(1);
  const [world, setWorld] = useState(() => initialWorld);

  const [count, setCount] = useState(10);




  function updateWorld() {
    const newWorld: World = WorldShaper.newWorld(worldSize, entities, foodCount + 1)
    setWorld(newWorld);
  }

  function incrimentFoodCount(amount: number = 1) {
    let t = foodCount + amount;
    setFoodCount(t);
    return 1;
  }
  async function inc(e: any) {
    incrimentFoodCount(1);
    setFoodCount(2);
    incrimentFoodCount(1);
    updateWorld();
  }



  console.log("render");

  return (
    <div className="App">
      <Grid world={world} />
      <button onClick={inc} >inc</button>
      <h1>{foodCount}</h1>
    </div>
  );
}

export default App;
