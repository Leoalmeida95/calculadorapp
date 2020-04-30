import 'modules/bootswatch/dist/pulse/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

import React from 'react'

export default props =>(
    <div className='container'>
        <Menu></Menu>
        <Todo></Todo>
        <About></About>
    </div>
)