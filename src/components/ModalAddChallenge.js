import {Modal, Button, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'
import './styles/ComponentsStyle.css'

function ModalAddChallenge(props){
    return(
        <Modal isOpen={props.modalAdd}>
            <ModalHeader>
                <div><h4>Agregar Reto</h4></div>
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
                />
                </FormGroup>
                
                <FormGroup>
                <label>
                    Descripcion: 
                </label>
                <textarea
                    className="form-control"
                    name="description"
                    type="textarea"
                    rows="3"
                    onChange={props.handleChange}
                />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <button
                color="primary"
                onClick={props.addChallenge}
                className="BtnAccept"
                >
                Insertar
                </button>
                <button
                className="btn btn-danger"
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