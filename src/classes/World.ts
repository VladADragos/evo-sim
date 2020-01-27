// import { Entity } from './Entity';
// import { NonEntity } from './NonEntity';
import { IWorldInterface, ISize, IEntities, WorldMap } from '../types/World';

class World implements IWorldInterface {
    worldMap: WorldMap;
    size: ISize;
    entities: IEntities
    food: number;

    constructor(worldMap: WorldMap, size: ISize, entities: IEntities, food: number) {
        this.worldMap = worldMap;
        this.size = size;
        this.entities = entities;
        this.food = food;
    }

}

export default World;