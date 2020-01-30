import React from 'react';
import DynamicEntity from '../subclasses/DynamicEntity';

export default class FriendlyEntity extends DynamicEntity {

    draw(): JSX.Element {
        return <i className="fas fa-crow fa-2x fa-fw fa-fh"></i>
    }
}