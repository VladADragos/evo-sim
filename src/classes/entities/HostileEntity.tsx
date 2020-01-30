import DynamicEntity from '../subclasses/DynamicEntity';
import React from 'react';
export default class HostileEntity extends DynamicEntity {
    draw() {
        return <i className="fas fa-cat fa-2x fa-fw fa-fh"></i>;
    }
}