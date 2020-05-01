import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './main/app'
import todoReducer from './todo/todoReducer'

const reducers = combineReducers({
    field: todoReducer
})

ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App/>
</Provider>, 
document.getElementById('app'))