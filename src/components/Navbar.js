import {Link} from 'react-router-dom'
import './styles/ComponentsStyle.css'


function Navbar(){
    return(
        <div className="container-fluid Navbar__container">
            <div className="row">
                <Link to='/'
                    className="col d-flex text-decoration-none justify-content-center">
                    <h1 className="Navbar__logo">Inocent</h1>                    
                </Link>
            </div>
        </div>
    )
}

export default Navbar