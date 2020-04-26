import React from 'react';
import ReactDOM from 'react-dom';
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';
// import Pai from './componentes/Pai'; 
// import ComponenteClasse from './componentes/ComponenteClasse';
// import Contador from './componentes/Contador';
import Hooks from './componentes/Hooks';

const elemento = document.getElementById('root');

ReactDOM.render(
    <div>
        <Hooks></Hooks>
        {/* <Contador numeroInicial={0}></Contador> */}
        {/* <ComponenteClasse valor="Componente classe"></ComponenteClasse> */}
        {/* {<Pai></Pai>} */}
        {/* <ComponenteComFuncao></ComponenteComFuncao> */}
        {/* <Familia sobrenome="Silva"> 
            <Membro nome="Leo"/>
            <Membro nome="Luana"/>
        </Familia> */}
    </div>  
, elemento)
  