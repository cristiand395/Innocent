import React from 'react'
import BtnEdit from './BtnEdit'
import BtnDelete from './BtnDelete'
import ModalEditChallenge from './ModalEditChallenge'
import './styles/ComponentsStyle.css'

function ChallengeItem(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-11 ChallengeItem__container">
                    <div className="d-flex justify-content-center">
                        <h4>{props.challenge.title}</h4>
                    </div>
                    <p className="d-flex justify-content-center">{props.challenge.description}</p>
                </div>
                <div className="col-1">
                    <BtnEdit 
                        showModalEdit={props.showModalEdit}
                        challenge={props.challenge}
                        handleChange={props.handleChange}/>
                    <BtnDelete
                        deleteChallenge={props.deleteChallenge}/>
                    <ModalEditChallenge
                        modalEdit={props.modalEdit}
                        closeModalEdit={props.closeModalEdit}
                        challengeId={props.challenge.id}
                        challengeTitle={props.challenge.title}
                        challengeDescription={props.challenge.description}
                        handleChange={props.handleChange}
                        formData={props.formData}
                        editChallenge={props.editChallenge}/>
                </div>
            </div>
        </div>
    )
}

export default ChallengeItem