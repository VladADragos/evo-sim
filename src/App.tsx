import React, { useState, useEffect, useMemo, useRef } from 'react';
import './App.css';
import WorldShaper from './classes/WorldShaper';
import Grid from './ui/Grid';
import { ISize, IEntities, WorldMap, IWorldData } from './types/World';
import { cursorTo } from 'readline';
import Food from './classes/entities/Food';
import Vec2d from './types/Vec2d';
import StaticEntity from './classes/subclasses/StaticEntity';



// const worldShaper = new WorldShaper();

const App: React.FC = () => {



  const initialEntities: IEntities = { friendlies: 8, hostiles: 8 };
  const initialWorldSize: ISize = { height: 8, width: 8 };
  const initialFoodCount: number = 0;
  const initialWorldData: IWorldData = { size: initialWorldSize, entities: initialEntities, food: initialFoodCount }

  const [entities, setEntities] = useState(initialEntities);
  const [size, setSize] = useState(initialWorldSize);
  const [food, setFood] = useState(1);

  // const world = useRef(WorldShaper.newWorld(initialWorldData))
  const w = useMemo(() => WorldShaper.newWorld(initialWorldData), []);
  const world = useRef(w);

  const [count, setCount] = useState(0);

  function log(e: StaticEntity) {
    console.log(e);
  }

  function updateWorld() {
    // const newWorldData: IWorldData = { size, entities, food: food + 1 }
    const newWorld: WorldMap = WorldShaper.addNonEntityToWorld(world.current);
    // world.current = newWorld;
  }


  function incrimentFoodCount(amount: number = 1) {
    setFood(food + amount);
  }

  function inc() {
    setCount(count + 1);
    incrimentFoodCount();
    updateWorld();

    console.log(world.current);
  }



  console.log("render");

  return (
    <div className="App">
      <Grid world={world.current} />
      <h2>{count}</h2>
      <button onClick={inc}>click</button>
    </div>
  );
}


export default App;
