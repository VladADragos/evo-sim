import DynamicEntity from '../subclasses/DynamicEntity';
import React from 'react';
import Vec2d from '../../types/Vec2d';
import { DynamicEntityType } from '../../types/Enums';
import Cords from '../../types/Cords';
export default class HostileEntity extends DynamicEntity {
    draw() {
        return <i className="fas fa-cat fa-2x fa-fw fa-fh"></i>;
    }
    constructor(position: Cords) {
        super(position, 3, 3, 3, DynamicEntityType.Hostile);
    }

    create(position: Cords) {
        return new HostileEntity(position);
    }
}