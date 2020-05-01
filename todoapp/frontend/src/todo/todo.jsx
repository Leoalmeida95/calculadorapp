import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component{
    
    constructor(props) {
        super(props)
        this.state={description:'', list: []}
    }

    handleAdd(){
        
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description} handleChange={()=> this.handleChange()} handleAdd={()=> this.handleAdd()} ></TodoForm>
                <TodoList></TodoList>
            </div>
        )
    }
}