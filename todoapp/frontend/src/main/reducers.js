
import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    // todo: todoReducer
    todo: ()=>({
        description: 'Ler',
        list: [{
            _id: 1,
            description: '1',
            done: true
        },{
            _id: 2,
            description: '2',
            done: false
        },
        {
            _id: 3,
            description: '3',
            done: false
        }]
    })
})

export default rootReducer