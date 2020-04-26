import React, {Component} from 'react';

export default class Contador extends Component{

    maisUm = () =>
    {
        this.props.numero++;
    }

    menosUm = () =>
    {
        this.props.numero--;
    }

    render(){
        return(
        <>
            <div>Número {this.props.numero}</div>
            <button onClick={this.maisUm}>Inc</button>
            <button onClick={this.menosUm}>Dec</button>
        </>
        )
    }
}

//tabalhando com 'this' em uma Classe

//Solução 01 - Bind
// constructor(props){
//     super(props);
//     this.maisUm = this.maisUm.bind(this);
// }

//Soluação 02 - Função Arrow - onClick
//<button onClick={() => this.maisUm()} >Inc</button>

// Solução 03 - Função Arrow
// maisUm = () =>{
//     this.props.numero++;
// }
