import {Link} from 'react-router-dom'
import './styles/ComponentsStyle.css'

function BtnPlay(props){
    return(
        <div
            onClick={props.function}
            className="BtnNextBack">
                {props.description}
                A Jugar!
        </div>
    )
}

export default BtnPlay