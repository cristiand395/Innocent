import {Link} from 'react-router-dom'
import './styles/ComponentsStyle.css'

function BtnCategory(props){
    return(
        <Link to={props.route}
            className="btn btn-primary">
                {props.description}
        </Link>
    )
}

export default BtnCategory