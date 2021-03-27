import {Modal, Button, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'
import './styles/ComponentsStyle.css'

function ModalGame(props){
    return(
        <Modal isOpen={props.modalEdit}>
            <ModalHeader>
            <div><h3>Editar Participante</h3></div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                <label>
                Id:
                </label>
                
                <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={props.formData.id}
                />
                </FormGroup>
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
                <Button
                color="primary"
                onClick={props.editParticipant}
                >
                Editar
                </Button>
                <Button
                color="danger"
                onClick={props.closeModalEdit}
                >
                Cancelar
                </Button>
            </ModalFooter>
        </Modal>

    )
}

export default ModalGame