import React from 'react'
import IconButton from '../template/iconButton'

export default props=>
{
    
const RenderRows = () =>{
    const list = props.list || []
    return list.map(todo=>(
        <tr className="table-dark" key={todo._id}>
            <th scope="row">{todo.description}</th>
            <td>
                <IconButton style='danger' icon='trash-o'
                     onClick={()=> props.handleRemove(todo._id)} ></IconButton>
            </td>
        </tr>
    ))
}

return(
    <table className="table table-hover mt-5">
    <thead>
        <tr>
        <th scope="col">Descrição</th>
        </tr>
    </thead>
    <tbody>
        {RenderRows()}
    </tbody>
    </table> 
)}