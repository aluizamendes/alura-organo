import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = ({ nome, cor, colaboradores, aoDeletar, mudarCor }) => {
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
                    onChange={evento => mudarCor(evento.target.value, nome)}
                />

                <div className='time-titulo'>
                    <h3 style={ {borderColor: cor} }>{nome}</h3>
                </div>
                <div className='cards'>
                    { colaboradores.map((colaborador) => {
                        //console.log(<Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar} />)
                        return <Colaborador corDeFundo={cor} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={aoDeletar} />
                    }) }
                </div>

            
        </section>
        : ""
    )
}

export default Time