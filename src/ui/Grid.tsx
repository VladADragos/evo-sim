import React, { FunctionComponent } from 'react';
import Row from './Row';
import { WorldMap } from '../types/World';
// import { NonEntity } from '../classes/NonEntity';


const Grid: FunctionComponent<{ world: WorldMap }> = ({ world }) => {
    return (<div> {world.map((row, i) => <Row row={row} key={i} />)} </div>);
}

export default Grid;