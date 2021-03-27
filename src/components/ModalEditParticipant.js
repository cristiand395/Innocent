import {Modal, Button, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'
import './styles/ComponentsStyle.css'

function ModalEditParticipant(props){
    return(
        <Modal isOpen={props.modalEdit}>
            <ModalHeader>
            <div><h4>Editar Participante</h4></div>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                <label>
                    Nombre: 
                </label>
                <input
                    className="form-control"
                    name="name"
                    type="text"
                    onChange={props.handleChange}
                    value={props.formData.name}
                />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <button
                color="primary"
                onClick={props.editParticipant}
                className="BtnAccept"
                >
                Editar
                </button>
                <button
                color="danger"
                onClick={props.closeModalEdit}
                className="BtnCancel"
                >
                Cancelar
                </button>
            </ModalFooter>
        </Modal>

    )
}

export default ModalEditParticipant