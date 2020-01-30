import React from 'react';
import Entity from '../subclasses/Entity';
import { StaticEntityType, DynamicEntityType } from '../../types/Enums';

export default class Empty extends Entity {
    private type: StaticEntityType = StaticEntityType.Empty;
    draw() {
        return <div className="empty"></div>;
    }
    isOfType(type: (StaticEntityType | DynamicEntityType)) {
        return this.type === type;
    }

    getType(): StaticEntityType {
        return this.type;
    }
}