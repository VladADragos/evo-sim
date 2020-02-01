import Vec2d from '../../types/Vec2d';
import { DynamicEntityType, StaticEntityType } from '../../types/Enums';
import Cords from '../../types/Cords';
export default abstract class Entity {
    position: Cords;

    constructor(position: Cords) {
        this.position = position;
    }

    abstract draw(): JSX.Element;
    abstract getType(): (DynamicEntityType | StaticEntityType);
    abstract isOfType(type: (DynamicEntityType | StaticEntityType)): boolean;
    abstract create(posotion: Cords): Entity;



}