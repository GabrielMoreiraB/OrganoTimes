import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime1, setCorTime1] = useState('');
  const [corTime2, setCorTime2] = useState('');


  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
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
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Jogador.</h2>
        <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite seu nome" 
            valor = {nome}
            aoAlterado ={valor => setNome(valor)}
        />
        <CampoTexto 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite seu Cargo"
            valor = {cargo}
            aoAlterado ={valor => setCargo(valor)} 
        />
        <CampoTexto  
            label="Imagem" 
            placeholder="Digite o endereço da imagem" 
            valor = {imagem}
            aoAlterado ={valor => setImagem(valor)}
        />
        <ListaSuspensa 
            obrigatorio={true} 
            label="Times" 
            itens = {props.times}
            value = {time}
            aoAlterado={time => setTime(time)}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form onSubmit={(e)=> {
        e.preventDefault();
        props.cadastrarTime({nome: nomeTime, corPrimaria: corTime1, corSecundaria: corTime2})
        console.log(nomeTime, corTime1, corTime2)
        setNomeTime("")
        setCorTime1("")
        setCorTime2("")
      }}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <CampoTexto 
            obrigatorio
            label="Nome" 
            placeholder="Digite o nome do time" 
            valor = {nomeTime}
            aoAlterado ={valor => setNomeTime(valor)}
        />
        <CampoTexto 
            obrigatorio
            type="color"
            label="cor1" 
            placeholder="Digite a cor primaria do time"
            valor = {corTime1}
            aoAlterado ={valor => setCorTime1(valor)} 
        />
        <CampoTexto 
            obrigatorio
            type="color"
            label="cor2" 
            placeholder="Digite a cor Secundaria do time"
            valor = {corTime2}
            aoAlterado ={valor => setCorTime2(valor)} 
        />
        <Botao>Criar novo time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
