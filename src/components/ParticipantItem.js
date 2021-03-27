import React from 'react'
import BtnEdit from './BtnEdit'
import BtnDelete from './BtnDelete'
import './styles/ComponentsStyle.css'
import ModalEditParticipant from './ModalEditParticipant'

function ParticipantItem(props) {
    return(
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-8 form-group mb-0 d-flex">
                    <span className="SpanParticipant">{props.participant.id}</span>
                    <input type="text" className="form-control"
                        onClick={props.showModalEdit}
                        value={props.participant.name}
                        onChange={props.handleChange}/>
                </div>
                <div className="col-4 d-flex justify-content-between align-items-center">
                    <BtnEdit 
                        className="mr-5"
                        showModalEdit={props.showModalEdit}
                        participant={props.participant}
                        handleChange={props.handleChange}/>
                    <BtnDelete
                        deleteParticipant={props.deleteParticipant}/>
                    <ModalEditParticipant
                        modalEdit={props.modalEdit}
                        closeModalEdit={props.closeModalEdit}
                        handleChange={props.handleChange}
                        formData={props.formData}
                        participant={props.participant}
                        editParticipant={props.editParticipant}/>
                </div>
            </div>
        </div>
    )
}

export default ParticipantItem