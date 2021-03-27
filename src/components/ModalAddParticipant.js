import {Modal, Button, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'
import './styles/ComponentsStyle.css'

function ModalAddChallenge(props){
    return(
        <Modal isOpen={props.modalAdd}>
            <ModalHeader>
                <div><h4>Agregar Participante</h4></div>
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
                />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <button
                color="primary"
                onClick={props.addParticipant}
                className="BtnAccept"
                >
                Agregar
                </button>
                <button
                className="BtnCancel"
                onClick={props.closeModalAdd}
                className="BtnCancel"
                >
                Cancelar
                </button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalAddChallenge