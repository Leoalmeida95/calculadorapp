import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:5001/api/todos'

class Todo extends Component{
    
    constructor(props) {
        super(props)
        this.state={description:'', list: []}
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }

    refresh(description=''){
        const search = description ? `&description__regex=/${description}/`:''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp=> {
                this.setState({...this.state, description, list: resp.data})
            })
            .catch(e=>{console.log(e)})
    }

    handleSearch(){
        this.refresh(this.state.description)
    }
    
    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:false})
            .then(resp=>{this.refresh(this.state.description)})
            .catch(e=>{console.log(e)})
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:true})
            .then(resp=>{this.refresh(this.state.description)})
            .catch(e=>{console.log(e)})
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp=>{this.refresh(this.state.description)})
            .catch(e=>{console.log(e)})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp=>{this.refresh()})
            .catch(e=>{console.log(e)})
    }

    handleClear(){
        this.refresh()
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm description={this.state.description} handleChange={(e)=> this.handleChange(e)} 
                handleAdd={()=> this.handleAdd()} handleSearch={()=> this.handleSearch()}
                handleClear={()=> this.handleClear()} ></TodoForm>
                <TodoList list={this.state.list} handleRemove={this.handleRemove} 
                handleMarkAsDone={this.handleMarkAsDone}  handleMarkAsPending={this.handleMarkAsPending} ></TodoList>
            </div>
        )
    }
}

// const mapStateToProps = (state) =>  {
//     return{
//         value: state.field.value
//     }
// }

// const mapDispatchToProps = (dispacth) =>
//     (bindActionCreators({changeValue}, dispacth))


export default Todo