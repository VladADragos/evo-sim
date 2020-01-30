import { FunctionComponent } from 'react';
import Entity from '../classes/subclasses/Entity';



interface Props {
    entity: Entity
}

const Icon: FunctionComponent<Props> = ({ entity }) => {
    return entity.draw();
}



export default Icon;