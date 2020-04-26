import React from 'react';

export function propsFilhos(props){
    return React.Children.map(props.children, componenteFilho =>{
        return React.cloneElement(componenteFilho, {...props})
    });
}