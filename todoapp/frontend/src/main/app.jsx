import 'modules/bootswatch/dist/pulse/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import Menu from '../template/menu'
import Routes from './routes'

import React from 'react'

export default props =>(
    <div>
        <Menu></Menu>
        <div className='container'>
            <Routes></Routes>
        </div>
    </div>
)