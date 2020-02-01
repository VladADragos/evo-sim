import StaticEntity from '../subclasses/StaticEntity';
import React from 'react';
import { StaticEntityType } from '../../types/Enums';
import Vec2d from '../../types/Vec2d';
import Cords from '../../types/Cords';
export default class Food extends StaticEntity {
    draw(): JSX.Element {
        return <i className="fas fa-apple-alt fa-2x fa-fw fa-fh"></i>;
    }
    constructor(position: Cords) {
        super(position, StaticEntityType.Food);
    }

    create(position: Cords) {
        return new Food(position);
    }
}