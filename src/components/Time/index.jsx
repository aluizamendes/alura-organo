import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = ({ id, nome, cor, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return(
        (colaboradores.length > 0) ?  

        <section 
            className='time-wrapper' 
            style={ {backgroundColor: hexToRgba(cor, 0.3)} }
        >
                <input 
                    type="color" 
                    className='input-cor' 
                    value={cor}
                    onChange={ (evento) => mudarCor(evento.target.value, id) }
                />

                <div className='time-titulo'>
                    <h3 style={ {borderColor: cor} }>{nome}</h3>
                </div>
                <div className='cards'>
                    { colaboradores.map((colaborador) => {
                        return (
                            <Colaborador 
                                corDeFundo={cor} 
                                key={colaborador.id} 
                                id={colaborador.id} 
                                nome={colaborador.nome} 
                                cargo={colaborador.cargo} 
                                imagem={colaborador.imagem} 
                                favorito={colaborador.favorito}
                                aoDeletar={aoDeletar} 
                                aoFavoritar={aoFavoritar}
                            />)
                    }) }
                </div>

            
        </section>
        : ""
    )
}

export default Time