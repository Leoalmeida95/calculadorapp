import 'modules/bootswatch/dist/pulse/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import Todo from '../todo/todo'
import About from '../about/about'

import React from 'react'

export default props =>(
    <div className='container'>
        <Todo></Todo>
        <About></About>
    </div>
)