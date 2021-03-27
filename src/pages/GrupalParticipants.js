import React from 'react'
import Db from '../server/db.json'
import ParticipantsList from '../components/ParticipantsList'
import ModalAddParticipant from '../components/ModalAddParticipant'
import BtnNext from '../components/BtnNext'
import BtnBack from '../components/BtnBack'
import BtnAdd from '../components/BtnAdd'
import '../components/styles/ComponentsStyle.css'


class GrupalParticipants extends React.Component {
    state = {
        error: null,
        data: Db,
        form: {
            id: '',
            name: '',
        },
        modalAdd: false,
        modalEdit: false,
    }
    

    handleChange = (e) => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    showModalAdd = ()=>{
        this.setState({modalAdd: true})
    }
    closeModalAdd = ()=>{
        this.setState({modalAdd: false})
    }

    showModalEdit = (info)=>{
        this.setState({modalEdit: true, form: info})
    }
    closeModalEdit = ()=>{
        this.setState({modalEdit: false})
    }
    
    addParticipant = ()=>{
        let newParticipant = {...this.state.form}
        newParticipant.id = this.state.data.grupalParticipants.length+1
        let list = this.state.data.grupalParticipants
        list.push(newParticipant)
        this.setState({data:{grupalParticipants:list}, modalAdd: false})
    }

    editParticipant = (info)=>{
        let count = 0
        let list = this.state.data.grupalParticipants
        list.map((participantInfo)=>{
            if(info.id == participantInfo.id){
                list[count].name = info.name
            }
            count++
        })
        this.setState({modalEdit: false, data:{grupalParticipants:list}})
    }

    deleteParticipant = (info)=>{
        console.log(info.id)
        let count = 0
        let list = this.state.data.grupalParticipants
        list.map((participantToDeleteInfo)=>{
            if(info.id == participantToDeleteInfo.id){
                list.splice(count, 1)
            }
            count++
        })
        this.setState({data:{grupalParticipants:list}})
    }

    render() {
        return(
            <div className="col">
                <div className="d-flex justify-content-center">
                    <h3>Participantes</h3>
                </div>
                <div className="d-flex justify-content-center">
                    <BtnAdd
                        function={this.showModalAdd}
                        description={'Agregar'}/>
                </div>
                <div className="ParticipantsList">
                    <ParticipantsList participants={this.state.data.grupalParticipants}
                        handleChange={this.handleChange}
                        modalEdit={this.state.modalEdit}                                        
                        showModalEdit={this.showModalEdit}
                        closeModalEdit={this.closeModalEdit}
                        editParticipant={()=>{this.editParticipant(this.state.form)}}
                        deleteParticipant={this.deleteParticipant}
                        formData={this.state.form}
                        addParticipant={this.addParticipant}
                    />
                </div>
                <ModalAddParticipant
                    handleChange={this.handleChange}
                    modalAdd={this.state.modalAdd}
                    closeModalAdd={this.closeModalAdd}
                    addParticipant={this.addParticipant}
                    dataInfo={this.state.data.grupalParticipants}/>
                {/* <ModalGame
                    /> */}
                <div className="d-flex justify-content-around">
                    <BtnBack/>
                    <BtnNext
                        route={'/grupal-play'}/>
                </div>
            </div>            
        )
    }
}

export default GrupalParticipants