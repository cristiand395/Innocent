import {Link} from 'react-router-dom'
import './styles/ComponentsStyle.css'

function BtnNext(props){
    return(
        <Link to={props.route}
            className="btn BtnNextBack">
                Siguiente
        </Link>
    )
}

export default BtnNext