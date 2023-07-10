import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({ favorito, corDeFundo, id, nome, imagem, cargo, aoDeletar, aoFavoritar}) => {

    const favoritar = () => {
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

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

                    <div className='favoritar'>
                        { favorito 
                            ? <AiFillHeart {...propsFavorito} color='red'/> 
                            : <AiOutlineHeart {...propsFavorito} /> 
                        }
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Colaborador