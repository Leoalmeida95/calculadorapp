import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import IconButton from '../template/iconButton'
import {markAsDone,markAsPanding, remove} from '../todo/todoActions'

const TodoList = props =>
{
    const list = props.list || []
    
    var rows = list.map(todo => 
        {
            return(
                    <tr className="table-light" key={todo._id}>
                        <th className={todo.done ? 'markedAsDone' : ''} scope="row">{todo.description}</th>
                        <td>
                            <IconButton style='danger' icon='trash-o' hide={!todo.done}
                                onClick={() => props.remove(todo)} ></IconButton>
                            <IconButton style='success' icon='check' hide={todo.done}
                                onClick={() => props.markAsDone(todo)} ></IconButton>
                            <IconButton style='warning' icon='undo' hide={!todo.done}
                                onClick={() => props.markAsPanding(todo)} ></IconButton>
                        </td>
                    </tr>
            )
        })

    return(
        <table className="table table-hover mt-5">
        <thead>
            <tr>
                <th scope="col">Descrição</th>
                <th scope="col" className='tableActions' >Ações</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
        </table> 
    )
}

const mapStateToProps = state =>(
    {list: state.todo.list}
)

const mapDispatchToProps = dispatch => 
bindActionCreators({markAsDone, markAsPanding, remove}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)