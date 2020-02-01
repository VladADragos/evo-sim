import React from 'react';
import Entity from '../subclasses/Entity';
import { StaticEntityType, DynamicEntityType } from '../../types/Enums';
import Cords from '../../types/Cords';

export default class Empty extends Entity {
    private type: StaticEntityType = StaticEntityType.Empty;

    constructor(position: Cords) {
        super(position);
    }
    draw() {
        return <div className="empty"></div>;
    }
    isOfType(type: (StaticEntityType | DynamicEntityType)) {
        return this.type === type;
    }

    getType(): StaticEntityType {
        return this.type;
    }
    create(position: Cords) {
        return new Empty(position);
    }
}