import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:5001/api/todos'

export default class Todo extends Component{
    
    constructor(props) {
        super(props)
        this.state={description:'', list: []}
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp=>{console.log(resp)})
            .catch(e=>{console.log(e)})
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description} handleChange={(e)=> this.handleChange(e)} handleAdd={()=> this.handleAdd()} ></TodoForm>
                <TodoList></TodoList>
            </div>
        )
    }
}