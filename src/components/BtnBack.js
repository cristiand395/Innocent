import './styles/ComponentsStyle.css'

function previousPage(){
    window.history.back()
}

function BtnNextBack(){
    return(
        <div className="btn success BtnNextBack"
            onClick={previousPage}>
            Atrás
        </div>
    )
}

export default BtnNextBack