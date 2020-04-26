import React from 'react';
import {propsFilhos} from '../utils/componentes';

export default props => 
<div>
    <h1>Família</h1>
    {
        // React.cloneElement(props.children, {...props})
        propsFilhos(props)
    }
</div>