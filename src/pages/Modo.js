import React from 'react'
import {Link} from 'react-router-dom'
import BtnMain from '../components/BtnMain'

function Modo(){
    return(
        <div className="col vh-100 d-flex justify-content-around align-items-center">
            <BtnMain
                description={'Dúo'}
                route={'/duo-retos'}/>
            <BtnMain
                description={'Grupo'}
                route={'/grupal-retos'}/>
        </div>
    )
}

export default Modo