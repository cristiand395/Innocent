import React from 'react'
import ChallengeItem from './ChallengeItem'
import './styles/ComponentsStyle.css'

function ChallengesList(props){
    return(
        <React.Fragment>
            <ul className="list-unstyled">
                {props.challenges.map((challenge) => {
                    return(
                        <li key={challenge.id}>
                            <ChallengeItem  challenge={challenge}
                                            showModalEdit={()=>props.showModalEdit(challenge)}
                                            closeModalEdit={props.closeModalEdit}
                                            handleChange={props.handleChange}
                                            modalEdit={props.modalEdit}
                                            formData={props.formData}
                                            editChallenge={props.editChallenge}
                                            deleteChallenge={()=>props.deleteChallenge(challenge)}/>
                        </li>
                    )
                })
                }
            </ul>
        </React.Fragment>
    )
}

export default ChallengesList