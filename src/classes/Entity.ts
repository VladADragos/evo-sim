// import { NonEntity } from './NonEntity';
import { EntityType, NonEntityType } from '../types/Enums';
import Vec2d from '../types/Vec2d';

export class Entity {
    private vision: number;
    private foodBar: number;
    private speed: number;
    private type: EntityType;
    public position: Vec2d;
    constructor(position: Vec2d, vision: number, foodBar: number, speed: number, type: EntityType) {
        this.position = position;
        this.foodBar = foodBar;
        this.vision = vision;
        this.speed = speed;
        this.type = type;
    }
    getVision(): number { return this.vision }
    getFoodBar(): number { return this.foodBar }
    getSpeed(): number { return this.speed }
    getType(): EntityType { return this.type }
    isOfType(type: (EntityType | NonEntityType)): boolean {
        return this.type === type;
    }
    isEmpty(): boolean {
        return false;
    }

}