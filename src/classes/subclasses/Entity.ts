import Vec2d from '../../types/Vec2d';
import { DynamicEntityType, StaticEntityType } from '../../types/Enums';
export default abstract class Entity {
    position: Vec2d;

    constructor(position: Vec2d) {
        this.position = position;
    }

    abstract draw(): JSX.Element;
    abstract getType(): (DynamicEntityType | StaticEntityType);
    abstract isOfType(type: (DynamicEntityType | StaticEntityType)): boolean;



}