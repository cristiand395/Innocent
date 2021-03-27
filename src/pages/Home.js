import {Link} from 'react-router-dom'
import BtnMain from '../components/BtnMain'

function Home(){    
    return (
        <div className="col vh-100 d-flex justify-content-center align-items-center">
            <BtnMain
                description={'Comenzar'}
                route={'/modo'}/>
        </div>
    )
}

export default Home