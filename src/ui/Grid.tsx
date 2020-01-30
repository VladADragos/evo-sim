import React, { FunctionComponent } from 'react';
import Row from './Row';
import { WorldMap } from '../types/World';
// import { NonEntity } from '../classes/NonEntity';



interface Props {
    world: WorldMap
}
const Grid: FunctionComponent<Props> = ({ world }) => {
    return (<div> {world.map((row, i) => <Row row={row} key={i} />)} </div>);
}


export default Grid;