import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {changeDescription} from '../todo/todoActions'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

const TodoForm = props =>
{

const keyHandler = (e) =>{
    if(e.key === 'Enter'){
        e.shiftKey ? props.handleSearch() : props.handleAdd()
    }else if (e.key === 'Escape'){
        props.handleClear()
    }
}


return(
    <div role='form'>
        <div className='row'>
            <Grid cols='12 9 10'>
                <input id='description' value={props.description} onChange={props.changeDescription}
                className='form-control' placeholder='Adicione uma tarefa' onKeyUp={keyHandler} ></input>
            </Grid>
    
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton style='dark' icon='close' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    </div>
    )
}

const mapStateToProps = state =>(
    {description: state.todo.description}
)

const mapDispatchToProps = dispatch => 
bindActionCreators({changeDescription}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)