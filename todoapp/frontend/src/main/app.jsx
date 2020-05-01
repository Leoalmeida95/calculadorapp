import 'modules/bootswatch/dist/pulse/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import {connect} from 'react-redux'

import Menu from '../template/menu'
import Routes from './routes'


function App(props){
    return(
    <div>
        <Menu></Menu>
        <div className='container'>
            <Routes></Routes>
        </div>
    </div>
    )
}

const mapStateToProps = (state) =>  {
    return{
        value: state.field.value
    }
}

export default connect(mapStateToProps)(App)