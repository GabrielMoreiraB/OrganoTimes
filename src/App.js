import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";


function App() {

  const [times, setTimes] = useState([
    {
      id:uuidv4(),
      nome: 'Imperial',
      corPrimaria: '#00D75B',
      corSecundaria: '#88A8A4'
    },
    {
      id:uuidv4(),
      nome: 'Furia',
      corPrimaria: '#040404',
      corSecundaria: '#B1AFB0'
    },
    {
      id:uuidv4(),
      nome: '00 Nation',
      corPrimaria: '#F5FF00',
      corSecundaria: '#B1AFB0'
    },
    {
      id:uuidv4(),
      nome: 'Pain',
      corPrimaria: '#000000',
      corSecundaria: '#BE223A'
    },
    {
      id:uuidv4(),
      nome: 'Seu Time',
      corPrimaria: '#ffffff',
      corSecundaria: '#B1AFB0'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  function deletarColaborador(nome){
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== nome))
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.corSecundaria = cor;
      }
      return time;
    }))
  }
  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4() }])
    console.log(times)
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {times.map(time => <Time 
      id={time.id}
      mudarCor={mudarCorDoTime}
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
      />)}   

    </div>
  );
}

export default App;