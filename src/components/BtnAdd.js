import {Link} from 'react-router-dom'
import './styles/ComponentsStyle.css'

function BtnAdd(props){
    return(
        <div onClick={props.function}
            className="BtnAdd">
            {props.description}
        </div>
    )
}

export default BtnAdd