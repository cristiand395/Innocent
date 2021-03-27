import {Modal, Button, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'
import './styles/ComponentsStyle.css'

function ModalEditChallenge(props){
    return(
        <Modal isOpen={props.modalEdit}>
            <ModalHeader>
            <div><h4>Editar Reto</h4></div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                <label>
                    Titulo: 
                </label>
                <input
                    className="form-control"
                    name="title"
                    type="text"
                    onChange={props.handleChange}
                    value={props.formData.title}
                />
                </FormGroup>
                
                <FormGroup>
                <label>
                    Descripción: 
                </label>
                <textarea
                    className="form-control"
                    name="description"
                    type="text"
                    onChange={props.handleChange}
                    value={props.formData.description}   
                    rows="3"
                />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <button
                color="primary"
                onClick={props.editChallenge}
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

export default ModalEditChallenge