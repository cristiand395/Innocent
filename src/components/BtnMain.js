import {Link} from 'react-router-dom'
import './styles/ComponentsStyle.css'

function BtnMain(props){
    return(
        <Link to={props.route}
            className="Btn BtnMain">
                {props.description}
        </Link>
    )
}

export default BtnMain