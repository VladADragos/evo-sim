// import { NonEntity } from './NonEntity';
import { EntityType } from '../types/Enums';

export class Entity {
    private y: number;
    private x: number;
    private vision: number;
    private foodBar: number;
    private speed: number;
    private type: EntityType;
    constructor(y: number, x: number, vision: number, foodBar: number, speed: number, type: EntityType) {
        this.y = y;
        this.x = x;
        this.foodBar = foodBar;
        this.vision = vision;
        this.speed = speed;
        this.type = type;
    }


    getY(): number { return this.y }
    getX(): number { return this.x }
    getVision(): number { return this.vision }
    getFoodBar(): number { return this.foodBar }
    getSpeed(): number { return this.speed }
    getType(): EntityType { return this.type }

}