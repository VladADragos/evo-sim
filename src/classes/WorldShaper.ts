import { StaticEntityType, DynamicEntityType } from '../types/Enums';
import NonEntity from './subclasses/StaticEntity';
import DynamicEntity from './subclasses/DynamicEntity'
import { WorldMap, IWorldData } from '../types/World';
import { ranNum } from '../util/ranNum';
import Cords from '../types/Cords';
// import World from './World';
import IPoint from '../types/IPoint';
import Empty from './entities/Empty';
import Entity from './subclasses/Entity';
import Food from './entities/Food';
import HostileEntity from './entities/HostileEntity';
import FriendlyEntity from './entities/FriendlyEntity';


export class WorldShaper {


    emptySquares: Cords[] = [];

    initializeEmptyWorld(n: number, m: number): WorldMap {
        let worldMap: WorldMap = [];
        for (let i: number = 0; i < n; i++) {
            worldMap.push([]);
            for (let j: number = 0; j < n; j++) {
                const position: Cords = { y: i, x: j };
                worldMap[i].push(new Empty(position));
            }
        }
        return worldMap;
    }


    addNonEntityToWorld(worldMap: WorldMap) {

        const index = ranNum(0, this.emptySquares.length - 1);
        const { y, x }: Cords = this.emptySquares[index];
        worldMap[y][x] = new Food({ y, x });
        this.emptySquares = this.getEmptySquares(worldMap);

        return worldMap;


    }

    addNonEntityAtIndex(point: Cords, worldMap: WorldMap) {
        const { y, x }: Cords = point;
        worldMap[y][x] = new NonEntity({ y, x }, StaticEntityType.Food);
        this.emptySquares = this.getEmptySquares(worldMap);
        return worldMap;


    }

    squareIsEmpty(point: Cords, worldMap: WorldMap): boolean {
        const { y, x }: Cords = point;
        return worldMap[y][x].getType() === StaticEntityType.Empty;
    }

    // update(world: WorldInterface):WorldInterface{





    //     return world;
    // }



    newWorld(world: IWorldData): WorldMap {
        let worldMap: WorldMap = this.initializeEmptyWorld(world.size.height, world.size.width);
        this.emptySquares = this.getEmptySquares(worldMap);
        this.fillEntity(world.entities.friendlies, new Food({ y: 0, x: 0 }), worldMap);
        // this.fillEntity(world.entities.hostiles, DynamicEntityType.Hostile, worldMap);


        // this.emptySquares = this.getEmptySquares(worldMap);
        console.log("new world");
        return worldMap;
    }



    // TODO make function create new instace based on type but better
    fillEntity<T = Empty>(count: number, entity: Entity, worldMap: WorldMap) {
        for (let i = 0; i < count; i++) {
            const index: number = ranNum(0, this.emptySquares.length - 1);

            const { y, x }: Cords = this.emptySquares[index];
            worldMap[y][x] = entity.create({ y, x });



            this.emptySquares.splice(index, 1);
        }
    }


    getEmptySquares(world: WorldMap): Cords[] {
        let emptySquares: Cords[] = [];
        let height: number = world.length;
        let width: number = world[0].length;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (this.squareIsEmpty({ y, x }, world)) {

                    emptySquares.push({ y, x });
                }
            }
        }
        return emptySquares;
    }

}


const worldShaper = new WorldShaper();

export default worldShaper;



