import StaticEntity from '../subclasses/StaticEntity';
import React from 'react';
import { StaticEntityType } from '../../types/Enums';
import Vec2d from '../../types/Vec2d';
export default class Food extends StaticEntity {
    draw(): JSX.Element {
        return <i className="fas fa-apple-alt fa-2x fa-fw fa-fh"></i>;
    }
    constructor(position: Vec2d) {
        super(position, StaticEntityType.Food);
    }
}