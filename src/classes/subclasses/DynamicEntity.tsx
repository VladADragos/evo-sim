// import { NonEntity } from './NonEntity';
import { DynamicEntityType, StaticEntityType } from '../../types/Enums';
import Vec2d from '../../types/Vec2d';
import Entity from './Entity';
import React from 'react';
export default class DynamicEntity extends Entity {
    private vision: number;
    private foodBar: number;
    private speed: number;
    private type: DynamicEntityType;
    constructor(position: Vec2d, vision: number, foodBar: number, speed: number, type: DynamicEntityType) {
        super(position);
        this.foodBar = foodBar;
        this.vision = vision;
        this.speed = speed;
        this.type = type;
    }
    getVision(): number { return this.vision }
    getFoodBar(): number { return this.foodBar }
    getSpeed(): number { return this.speed }
    getType(): DynamicEntityType { return this.type }
    isOfType(type: (DynamicEntityType | StaticEntityType)): boolean {
        return this.type === type;
    }
    draw(): JSX.Element {
        return <h1>Dynamic Entity</h1>;
    }



}