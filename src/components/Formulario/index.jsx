import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const aoSalvar = (evt) => {
        evt.preventDefault()
        console.log("Form foi submetido =>", nome, cargo, imagem, time)

        // envia como parametro da prop um objeto com os dados do colaborador
        props.aoColaboradorCadastrado( {
            nome,
            cargo,
            imagem,
            time
        })

        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    return (
        <>
            <section className='formulario'>
                <div className='titulo'>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                </div>
                
                <div className="formulario-wrapper">

                    <form onSubmit={aoSalvar}>
                        <CampoTexto 
                            obrigatorio={true} 
                            label="Nome" 
                            placeholder="Digite seu nome" 
                            valor={nome}
                            aoAlterado={valor => setNome(valor)}
                        />
                        <CampoTexto 
                            obrigatorio={true} 
                            label="Cargo" 
                            placeholder="Digite seu cargo"
                            valor={cargo}
                            aoAlterado={valor => setCargo(valor)} 
                        />
                        <CampoTexto 
                            label="Imagem" 
                            placeholder="Informe a imagem" 
                            valor={imagem}
                            aoAlterado={valor => setImagem(valor)}
                        />
                        <ListaSuspensa 
                            obrigatorio={true} 
                            label="Time" 
                            itens={props.nomeTimes}
                            valor={time} 
                            aoAlterado={valor => setTime(valor)}
                        />
                        <Botao>
                            Criar card
                        </Botao>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Formulario