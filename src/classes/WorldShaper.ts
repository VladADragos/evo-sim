import { NonEntityType, EntityType } from '../types/Enums';
import { NonEntity } from './NonEntity';
import { Entity } from './Entity'
import { WorldMap, IWorldData } from '../types/World';
import { ranNum } from '../util/ranNum';
import Vec2d from '../types/Vec2d';
// import World from './World';
import IPoint from '../types/IPoint';


export class WorldShaper {


    emptySquares: Vec2d[] = [];

    initializeEmptyWorld(n: number, m: number): WorldMap {
        let worldMap: WorldMap = [];
        for (let i: number = 0; i < n; i++) {
            worldMap.push([]);
            for (let j: number = 0; j < n; j++) {
                worldMap[i].push(new NonEntity(new Vec2d(i, j), NonEntityType.Empty));
            }
        }
        return worldMap;
    }


    addNonEntityToWorld(worldMap: WorldMap) {
        // const ranIndex: number = ranNum(0, this.emptySquares.length - 1)
        // const point: Vec2d = this.emptySquares[ranIndex];
        // console.log(this.emptySquares);


        const index = ranNum(0, this.emptySquares.length - 1);
        const point: IPoint = this.emptySquares[index].getYX();

        // console.log("index " + index);
        // console.log(point);
        worldMap[point.y][point.x] = new NonEntity(new Vec2d(point.y, point.x), NonEntityType.Grass);
        // console.log(this.squareIsEmpty(new Vec2d(point.y, point.x), worldMap));
        this.emptySquares = this.getEmptySquares(worldMap);

        return worldMap;


    }

    addNonEntityAtIndex(point: Vec2d, worldMap: WorldMap) {
        const { y, x }: IPoint = point.getYX();
        worldMap[y][x] = new NonEntity(new Vec2d(y, x), NonEntityType.Grass);
        this.emptySquares = this.getEmptySquares(worldMap);
        return worldMap;


    }

    squareIsEmpty(point: Vec2d, worldMap: WorldMap): boolean {
        const { y, x }: IPoint = point.getYX();
        return worldMap[y][x].isEmpty();
    }

    // update(world: WorldInterface):WorldInterface{





    //     return world;
    // }



    newWorld(world: IWorldData): WorldMap {
        let worldMap: WorldMap = this.initializeEmptyWorld(world.size.height, world.size.width);
        this.emptySquares = this.getEmptySquares(worldMap);
        this.fillEntity(world.entities.friendlies, EntityType.Friendly, worldMap);
        this.fillEntity(world.entities.hostiles, EntityType.Hostile, worldMap);
        this.fillNonEntity(world.food, NonEntityType.Grass, worldMap);
        // this.emptySquares = this.getEmptySquares(worldMap);
        console.log("new world");
        return worldMap;
    }


    fillEntity(count: number, type: EntityType, worldMap: WorldMap) {
        for (let i = 0; i < count; i++) {
            const index: number = ranNum(0, this.emptySquares.length - 1);
            const point: IPoint = this.emptySquares[index].getYX();
            worldMap[point.y][point.x] = new Entity(new Vec2d(point.y, point.x), 3, 3, 1, type);
            this.emptySquares.splice(index, 1);
        }
    }
    fillNonEntity(count: number, type: NonEntityType, worldMap: WorldMap) {
        for (let i = 0; i < count; i++) {
            const index = ranNum(0, this.emptySquares.length - 1);
            const point: IPoint = this.emptySquares[index].getYX();

            worldMap[point.y][point.x] = new NonEntity(new Vec2d(point.y, point.x), type);
            this.emptySquares.splice(index, 1);
        }
    }

    getEmptySquares(world: WorldMap): Vec2d[] {
        let emptySquares: Vec2d[] = [];
        let height: number = world.length;
        let width: number = world[0].length;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (this.squareIsEmpty(new Vec2d(y, x), world)) {

                    emptySquares.push(new Vec2d(y, x));
                }
            }
        }
        return emptySquares;
    }

}


const worldShaper = new WorldShaper();

export default worldShaper;



