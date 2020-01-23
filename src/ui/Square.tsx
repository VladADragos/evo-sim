import React, { FunctionComponent } from 'react';
import Icon from './Icon';
import { EntityType, NonEntityType } from '../types/Enums';




const Square: FunctionComponent<{ type: EntityType | NonEntityType }> = ({ type }) => {
    return <div className="square"><Icon type={type} /></div>
}

export default Square;