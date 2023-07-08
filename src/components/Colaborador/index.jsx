import { AiFillCloseCircle } from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({corDeFundo, id, nome, imagem, cargo, aoDeletar}) => {

    return (
        <>
            <div className='card'>

                <div className='icon-excluir-container'>
                    <AiFillCloseCircle 
                        className='deletar'
                        onClick={ () => aoDeletar(id)}
                        size={25}
                        color='#707070' 
                    />
                </div>

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
        </>
    )
}

export default Colaborador