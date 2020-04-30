import 'modules/bootswatch/dist/pulse/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import Menu from '../template/menu'
import Routes from './routes'

import React from 'react'

export default props =>(
    <div className='container'>
        <Menu></Menu>
        <Routes></Routes>
    </div>
)