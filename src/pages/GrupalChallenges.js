import React from 'react'
import ChallengesList from '../components/ChallengesList'
import Db from '../server/db.json'
import ModalAddChallenge from '../components/ModalAddChallenge'
import BtnNext from '../components/BtnNext'
import BtnBack from '../components/BtnBack'
import BtnAdd from '../components/BtnAdd'
import '../components/styles/ComponentsStyle.css'


class GrupalChallenges extends React.Component{
    state = {
        error: null,
        data: Db,
        form: {
            id: '',
            title: '',
            description: '',
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
    
    addChallenge = ()=>{
        let newChallenge = {...this.state.form}
        newChallenge.id = this.state.data.grupal.length+1
        let list = this.state.data.grupal
        list.push(newChallenge)
        this.setState({data:{grupal:list}, modalAdd: false})
    }

    editChallenge = (info)=>{
        let count = 0
        let list = this.state.data.grupal
        list.map((challengeInfo)=>{
            if(info.id == challengeInfo.id){
                list[count].title = info.title
                list[count].description = info.description
            }
            count++
        })
        this.setState({modalEdit: false, data:{grupal:list}})
    }

    deleteChallenge = (info)=>{
        let count = 0
        let list = this.state.data.grupal
        list.map((challengeToDeleteInfo)=>{
            if(info.id == challengeToDeleteInfo.id){
                list.splice(count, 1)
            }
            count++
        })
        this.setState({data:{grupal:list}})
    }
    
    render(){
        return(
            <div className="col">
                <div className="d-flex justify-content-center">
                    <h3>Retos</h3>
                </div>
                <div className="d-flex justify-content-center">
                    <BtnAdd
                        function={this.showModalAdd}
                        description={'Agregar'}/>
                </div>
                <div className="ChallengesList">
                    <ChallengesList challenges={this.state.data.grupal}
                        handleChange={this.handleChange}
                        modalEdit={this.state.modalEdit}                                        
                        showModalEdit={this.showModalEdit}
                        closeModalEdit={this.closeModalEdit}
                        editChallenge={()=>{this.editChallenge(this.state.form)}}
                        deleteChallenge={this.deleteChallenge}
                        formData={this.state.form}
                        />
                </div>
                <ModalAddChallenge
                    handleChange={this.handleChange}
                    modalAdd={this.state.modalAdd}
                    closeModalAdd={this.closeModalAdd}
                    addChallenge={this.addChallenge}
                    dataInfo={this.state.data.grupal}/>
                <div className="d-flex justify-content-around">
                    <BtnBack/>
                    <BtnNext
                        route={'/grupal-participantes'}
                        />
                </div>
            </div>
        )
    }
}

export default GrupalChallenges