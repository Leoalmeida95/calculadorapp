import React from 'react';

const aprovados = ['Leo', 'Ana', 'Denise', 'Luana'];

export default props =>{
    const gerarItens= itens =>{
        return itens.map(item => <li>{item}</li>)
    }

    return(
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}