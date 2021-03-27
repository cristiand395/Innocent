import React from 'react'
import './styles/ComponentsStyle.css'

function ChallengeItemResult(props) {
    return(
        <div className="container ">
            <div className="row d-flex justify-content-center">
                <div className="col-12 ChallengeItem__container">
                    <div className="d-flex justify-content-center">
                        <h4>{props.challenge}</h4>
                    </div>
                    <p className="d-flex justify-content-center">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
export default ChallengeItemResult