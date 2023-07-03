import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return(
        (props.colaboradores.length > 0) ?  <section className='time-wrapper' style={ {backgroundColor: props.corSecundaria} }>
            <div className='time-titulo'>
                <h3 style={ {borderColor: props.corPrimaria} }>{props.nome}</h3>
            </div>
            <div className='cards'>
                { props.colaboradores.map((colaborador) => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />) }
            </div>

            
        </section>
        : ""
    )
}

export default Time