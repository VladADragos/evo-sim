import { StaticEntityType, DynamicEntityType } from '../../types/Enums';
import Vec2d from '../../types/Vec2d';
import React from 'react';
import Entity from './Entity';
import Cords from '../../types/Cords';

export default class StaticEntity extends Entity {
    private type: StaticEntityType;
    constructor(position: Cords, type: StaticEntityType) {
        super(position);
        this.type = type;
        this.position = position;
    }

    getType(): StaticEntityType { return this.type }
    isOfType(type: (DynamicEntityType | StaticEntityType)): boolean {
        return this.type === type;
    }
    draw(): JSX.Element {
        return <h1>static entity</h1>

    }
    create(position: Cords) {
        return new StaticEntity(position, StaticEntityType.Empty);

    }

}