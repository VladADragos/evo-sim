import { Entity } from '../classes/Entity';
import { NonEntity } from '../classes/NonEntity';


export type WorldMap = (NonEntity | Entity)[][];
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



