import { NonEntityType, EntityType } from '../types/Enums';
import Vec2d from '../types/Vec2d';

export class NonEntity {
    private type: NonEntityType;
    public position: Vec2d;
    constructor(position: Vec2d, type: NonEntityType) {
        this.type = type;
        this.position = position;
    }

    getType(): NonEntityType { return this.type }
    isOfType(type: (EntityType | NonEntityType)): boolean {
        return this.type === type;
    }

    isEmpty(): boolean {
        return this.isOfType(NonEntityType.Empty);
    }
}