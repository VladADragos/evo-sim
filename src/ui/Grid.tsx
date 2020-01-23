import React, { FunctionComponent } from 'react';
import Row from './Row';
import { World } from '../types/World';
// import { NonEntity } from '../classes/NonEntity';


const Grid: FunctionComponent<{ world: World }> = ({ world }) => {
    return (<div> {world.map((row, i) => <Row row={row} key={i} />)} </div>);
}

export default Grid;