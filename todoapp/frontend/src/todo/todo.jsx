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
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp=> {
                this.setState({...this.state, description:'', list: resp.data})
            })
            .catch(e=>{console.log(e)})
    }
    
    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:false})
            .then(resp=>{this.refresh()})
            .catch(e=>{console.log(e)})
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:true})
            .then(resp=>{this.refresh()})
            .catch(e=>{console.log(e)})
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp=>{this.refresh()})
            .catch(e=>{console.log(e)})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp=>{this.refresh()})
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
                <TodoList list={this.state.list} handleRemove={this.handleRemove} 
                handleMarkAsDone={this.handleMarkAsDone}  handleMarkAsPending={this.handleMarkAsPending} ></TodoList>
            </div>
        )
    }
}