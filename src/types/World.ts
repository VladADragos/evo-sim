import { Entity } from '../classes/Entity';
import { NonEntity } from '../classes/NonEntity';

export type World = (NonEntity | Entity)[][];

