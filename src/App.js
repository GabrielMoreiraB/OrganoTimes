import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";


function App() {

  const times = [
    {
      nome: 'Imperial',
      corPrimaria: '#00D75B',
      corSecundaria: '#88A8A4'
    },
    {
      nome: 'Furia',
      corPrimaria: '#000000',
      corSecundaria: '#B1AFB0'
    },
    {
      nome: '00 Nation',
      corPrimaria: '#F5FF00',
      corSecundaria: '#B1AFB0'
    },
    {
      nome: 'Pain',
      corPrimaria: '#000000',
      corSecundaria: '#BE223A'
    },
    {
      nome: 'Seu Time',
      corPrimaria: '#ffffff',
      corSecundaria: '#B1AFB0'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   

    </div>
  );
}

export default App;