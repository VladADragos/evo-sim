import StaticEntity from '../classes/subclasses/StaticEntity';
import Entity from '../classes/subclasses/Entity';


export type WorldMap = Entity[][];
export interface ISize {
    height: number,
    width: number;

}
export interface IEntities {
    friendlies: number,
    hostiles: number;

}
export interface IWorldData {
    size: ISize,
    entities: IEntities
    food: number
}
export interface IWorldInterface extends IWorldData {
    worldMap: WorldMap
}



