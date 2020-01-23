import React, { FunctionComponent } from 'react';
import Square from './Square';
import { Entity } from '../classes/Entity';
import { NonEntity } from '../classes/NonEntity';


// :
const Row: FunctionComponent<{ row: (NonEntity | Entity)[] }> = ({ row }) => {
    return <div className="row">{row.map((square, i) => <Square type={square.getType()} key={i} />)}</div>
}


export default Row;