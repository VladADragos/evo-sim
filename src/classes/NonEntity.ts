import { NonEntityType } from '../types/Enums';

export class NonEntity {
    private y: number;
    private x: number;
    private type: NonEntityType;
    constructor(y: number, x: number, type: NonEntityType) {
        this.y = y;
        this.x = x;
        this.type = type;
    }
    getY(): number { return this.y }
    getX(): number { return this.x }
    getType(): NonEntityType { return this.type }
}