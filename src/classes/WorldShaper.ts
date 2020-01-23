import { NonEntityType, EntityType } from '../types/Enums';
import { NonEntity } from './NonEntity';
import { Entity } from './Entity'
import { World } from '../types/World';
import { ranNum } from '../util/ranNum';
import Vec2d from '../types/Vec2d';
export class WorldShaper {


    initializeEmptyWorld(n: number, m: number) {
        let world: World = [];
        for (let i: number = 0; i < n; i++) {
            world.push([]);
            for (let j: number = 0; j < n; j++) {
                world[i].push(new NonEntity(0, 0, NonEntityType.empty));
            }
        }
        return world;
    }

    newWorld(size: { height: number, width: number }, entities: { friendlies: number, hostiles: number }, food: number): World {
        let world: World = this.initializeEmptyWorld(size.height, size.width);

        this.fillEntity(entities.friendlies, EntityType.friendly, world);
        this.fillEntity(entities.hostiles, EntityType.hostile, world);
        this.fillNonEntity(food, NonEntityType.grass, world);

        return world;
    }

    fillEntity(count: number, type: EntityType, world: World) {
        let emptySquares: Vec2d[] = this.getEmptySquares(world);
        for (let i = 0; i < count; i++) {
            let index = ranNum(0, emptySquares.length - 1);
            let { y, x } = emptySquares[index];
            world[y][x] = new Entity(y, x, 3, 3, 1, type);
            emptySquares.splice(index, 1);
        }
    }
    fillNonEntity(count: number, type: NonEntityType, world: World) {
        let emptySquares: Vec2d[] = this.getEmptySquares(world);
        for (let i = 0; i < count; i++) {
            let index = ranNum(0, emptySquares.length - 1);
            let { y, x } = emptySquares[index];
            world[y][x] = new NonEntity(y, x, type);
            emptySquares.splice(index, 1);
        }
    }

    getEmptySquares(world: World) {
        let emptySquares: Vec2d[] = [];
        let height: number = world.length;
        let width: number = world[0].length;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                emptySquares.push({ y, x });
            }
        }
        return emptySquares;
    }

}


const worldShaper = new WorldShaper();

export default worldShaper;



