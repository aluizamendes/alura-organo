import { useState } from 'react'
import Banner from './components/Banner/Banner'
import CampoTexto from './components/CampoTexto'
import Formulario from './components/Formulario'
import Time from './components/Time'

function App() {

  const [times, setTimes] = useState([
    {
      nome: "Programação",
      cor: "#57C278"
    },
    {
      nome: "Front-end",
      cor: "#82CFFA"
    },
    {
      nome: "Data Science",
      cor: "#A6D157"
    },
    {
      nome: "DevOps",
      cor: "#E06B69"
    },
    {
      nome: "UX e Design",
      cor: "#DB6EBF"
    },
    {
      nome: "Mobile",
      cor: "#FFBA05"
    },
    {
      nome: "Inovação e gestão",
      cor: "#FF8A29"
    }
  ])
  
  const [colaboradores, setColaboradores] = useState([])

  const mudarCorDoTime = (cor, nome) => {
    setTimes(times.map((time) => {
      if (time.nome === nome) {
        time.cor = cor
      }
      return time
    }))
  }

  const deletarColaborador = () => {
    console.log("Deletando colaborador")
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])

  }
  
  return (
    <>
      <Banner />
      <Formulario 
        nomeTimes={times.map((time) => time.nome)}
        aoColaboradorCadastrado={ (colaborador) => aoNovoColaboradorAdicionado(colaborador) } 
      />
      
      { times.map((time) => 
        <Time 
          key={time.nome} 
          nome={time.nome} 
          cor={time.cor}
          colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
        />
      )}
    </>
  )
}

export default App
