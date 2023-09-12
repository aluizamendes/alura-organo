import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Banner from './components/Banner'
import CampoTexto from './components/CampoTexto'
import Formulario from './components/Formulario'
import Time from './components/Time'

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278"
    },
    {
      id: uuidv4(),
      nome: "Front-end",
      cor: "#82CFFA"
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157"
    },
    {
      id: uuidv4(),
      nome: "DevOps",
      cor: "#E06B69"
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF"
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05"
    },
    {
      id: uuidv4(),
      nome: "Inovação e gestão",
      cor: "#FF8A29"
    }
  ])
  
  const [colaboradores, setColaboradores] = useState([])

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map((time) => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id != id))
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])

  }

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }])

  }

  const resolverFavorito = (id) => {
    setColaboradores(colaboradores.map((colaborador) => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }
  
  return (
    <>
      <Banner 
        enderecoImagem='/imagens/banner.png'
        textoAlternativo='Banner principal da página do Organo.'
      />
      <Formulario 
        cadastrarTime={cadastrarTime}
        nomeTimes={times.map((time) => time.nome)}
        aoColaboradorCadastrado={ (colaborador) => aoNovoColaboradorAdicionado(colaborador) } 
      />
      
      { times.map((time) => 
        <Time 
          key={time.id} 
          id={time.id}
          nome={time.nome} 
          cor={time.cor}
          colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
          aoFavoritar={resolverFavorito}
        />
      )}
    </>
  )
}

export default App
