import React from 'react';
import ReactDOM from 'react-dom';
import Familia from './componentes/Familia';
import Membro from './componentes/Membro';
import COmponenteComFuncao from './componentes/ComponenteComFuncao';
import Pai from './componentes/Pai'; 

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        {<Pai></Pai>}
        {/* <COmponenteComFuncao></COmponenteComFuncao> */}
        {/* <Familia sobrenome="Silva"> 
            <Membro nome="Leo"/>
            <Membro nome="Luana"/>
        </Familia> */}
    </div>  
, elemento)
  