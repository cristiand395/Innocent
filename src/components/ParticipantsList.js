import React from 'react'
import ParticipantItem from './ParticipantItem'
import './styles/ComponentsStyle.css'


function ParticipantsList(props){
    return(
        <React.Fragment>
            <ul className="list-unstyled ParticipantsList__container">
                {props.participants.map((participant) => {
                    return(
                        <li key={participant.id}>
                            <ParticipantItem  participant={participant}
                                            showModalEdit={()=>props.showModalEdit(participant)}
                                            closeModalEdit={props.closeModalEdit}
                                            handleChange={props.handleChange}
                                            modalEdit={props.modalEdit}
                                            formData={props.formData}
                                            editParticipant={props.editParticipant}
                                            deleteParticipant={()=>props.deleteParticipant(participant)}
                                            addParticipant={props.addParticipant}
                                            />
                        </li>
                    )
                })
                }
            </ul>
        </React.Fragment>
    )
}

export default ParticipantsList