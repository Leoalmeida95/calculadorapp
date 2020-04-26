import React from 'react';
import ReactDOM from 'react-dom';
import Familia from './componentes/Familia';
import Membro from './componentes/Membro';

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <Familia sobrenome="Silva"> 
            <Membro nome="Leo"/>
            <Membro nome="Luana"/>
        </Familia>
    </div>  
, elemento)
  