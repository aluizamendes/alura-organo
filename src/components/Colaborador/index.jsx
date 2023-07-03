import './Colaborador.css'

const Colaborador = ({corDeFundo, nome, imagem, cargo}) => {

    return (
        <div className='card-wrapper'>
            <div className='card-header' style={{backgroundColor: corDeFundo}}>
                <div className='card-image'>
                    <img src={imagem} alt={nome} />
                </div>
            </div>
            <div className='card-text'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador