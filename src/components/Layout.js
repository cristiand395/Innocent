import React from 'react'
import Navbar from './Navbar'
import './styles/ComponentsStyle.css'


function Layout(props){
    return(
        <React.Fragment>
            <Navbar/>
            <div className="container Layout__container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout