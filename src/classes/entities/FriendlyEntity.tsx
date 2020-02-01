import React from 'react';
import DynamicEntity from '../subclasses/DynamicEntity';
import Vec2d from '../../types/Vec2d';
import { DynamicEntityType } from '../../types/Enums';
import Cords from '../../types/Cords';

export default class FriendlyEntity extends DynamicEntity {

    draw(): JSX.Element {
        return <i className="fas fa-crow fa-2x fa-fw fa-fh"></i>
    }

    constructor(position: Cords) {
        super(position, 3, 3, 3, DynamicEntityType.Friendly);
    }

    create(position: Cords): FriendlyEntity {
        return new FriendlyEntity(position);
    }
}