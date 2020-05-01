import React from 'react'
import IconButton from '../template/iconButton'

export default props=>
{

const list = props.list || []
    
var rows = list.map(todo => 
    {
        return(
                <tr className="table-light" key={todo._id}>
                    <th className={todo.done ? 'markedAsDone' : ''} scope="row">{todo.description}</th>
                    <td>
                        <IconButton style='danger' icon='trash-o' hide={!todo.done}
                            onClick={() => props.handleRemove(todo)} ></IconButton>
                        <IconButton style='success' icon='check' hide={todo.done}
                            onClick={() => props.handleMarkAsDone(todo)} ></IconButton>
                        <IconButton style='warning' icon='undo' hide={!todo.done}
                            onClick={() => props.handleMarkAsPending(todo)} ></IconButton>
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
)}