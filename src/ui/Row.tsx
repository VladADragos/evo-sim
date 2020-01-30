import React, { FunctionComponent } from 'react';
import Square from './Square';
import Entity from '../classes/subclasses/Entity';


interface Props {
    row: Entity[]
}

const Row: FunctionComponent<Props> = ({ row }) => {
    console.log(row);
    return <div className="row">{row.map((square, i) => <Square entity={square} key={i} />)}</div>
}



export default Row;