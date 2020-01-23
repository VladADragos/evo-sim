import React, { FunctionComponent } from 'react';
import { NonEntityType, EntityType } from '../types/Enums';




const Icon: FunctionComponent<{ type: NonEntityType | EntityType }> = ({ type }) => {
    switch (type) {
        case NonEntityType.grass:
            return <i className="fas fa-apple-alt fa-2x fa-fw fa-fh"></i>;
        case EntityType.friendly:
            return <i className="fas fa-crow fa-2x fa-fw fa-fh"></i>
        case EntityType.hostile:
            return <i className="fas fa-cat fa-2x fa-fw fa-fh"></i>
        case NonEntityType.empty:
            return <i className="empty far fa-cicle fa-2x fa-fw fa-fh"></i>;
        default:
            return <i className="empty far fa-cicle fa-2x fa-fw fa-fh"></i>;
    }
}


export default Icon;