import React from 'react'
import BtnPlay from '../components/BtnPlay'
import BtnBack from '../components/BtnBack'
import Db from '../server/db.json'
import ChallengeItemResult from '../components/ChallengeItemResult'

class GrupalPlay extends React.Component {
    state = {
        data : Db,
        name: '',
        title: '',
        description: '',
    }
    
    showData = ()=>{
        let names = this.state.data.grupalParticipants
        let challenges = this.state.data.grupal
        names = names[Math.floor(Math.random() * names.length)]
        challenges = challenges[Math.floor(Math.random() * challenges.length)]
        this.setState({name: names.name, title: challenges.title, description: challenges.description})
        console.log(names.name)
        console.log(challenges.title)
        console.log(challenges.description)
    }

    render() {
        return(
            <div className="col">
                <div className="d-flex justify-content-center">
                    <p>Turno de:</p>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <h1>{this.state.name || 'Nombre'}</h1>
                    </div>
                </div>
                <div className="col">
                    <ChallengeItemResult
                        challenge={this.state.title || 'Reto'}
                        description={this.state.description || 'Descripcion'}/>
                </div>
                <div className="d-flex justify-content-around">
                    <BtnBack/>
                    <BtnPlay
                        function={this.showData}
                        route={'/grupal-play'}/>
                </div>
            </div>
        )
    }
}
export default GrupalPlay