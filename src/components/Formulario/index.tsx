import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { IColaborador } from '../../shared/interfaces/IColaborador'
import { ITime } from '../../shared/interfaces/ITime'
import CampoCor from '../CampoCor'

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    nomeTimes: string[]
    cadastrarTime: (novoTime: ITime) => void
}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")
    const [nomeTime, setNomeTime] = useState("")
    const [corTime, setCorTime] = useState("")

    const aoSalvar = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        console.log("Form foi submetido =>", nome, cargo, imagem, time)

        // envia como parametro da prop um objeto com os dados do colaborador
        props.aoColaboradorCadastrado( {
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time,
            favorito: false
        })

        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

    const aoCriarTime = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        props.cadastrarTime({
            nome: nomeTime,
            cor: corTime
        })

        setNomeTime("")
        setCorTime("")
    }

    return (
        <>
            <section className='formulario'>
                                
                <div className="formulario-wrapper">

                    <div className='titulo'>
                        <h2>Preencha os dados para criar o card do colaborador</h2>
                    </div>

                    <form onSubmit={evento => aoSalvar(evento)}>
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

                <div className="formulario-wrapper">

                    <div className='titulo'>
                        <h2>Preencha os dados para criar um novo time</h2>
                    </div>

                    <form onSubmit={evento => aoCriarTime(evento)}>
                        <CampoTexto 
                            obrigatorio={true} 
                            label="Nome" 
                            placeholder="Digite o nome do time" 
                            valor={nomeTime}
                            aoAlterado={valor => setNomeTime(valor)}
                        />
                        <CampoCor 
                            obrigatorio={true} 
                            label="Cor"
                            valor={corTime}
                            aoAlterado={valor => setCorTime(valor)} 
                        />
                        <Botao>
                            Criar time
                        </Botao>
                    </form>
                </div>
                
            </section>
        </>
    )
}

export default Formulario