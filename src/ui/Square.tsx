import React, { FunctionComponent } from 'react';
import Icon from './Icon';
import Entity from '../classes/subclasses/Entity';



interface Props {
    entity: Entity
}

const Square: FunctionComponent<Props> = ({ entity }) => {
    return <div className="square"><Icon entity={entity} /></div>;
}




export default Square;