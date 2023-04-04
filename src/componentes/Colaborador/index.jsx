import './Colaborador.css'
import {FaWindowClose} from 'react-icons/fa'


const Colaborador = ({ nome, imagem, cargo, corDeFundo,aoDeletar }) => {
    return (<div className='colaborador'>
        <FaWindowClose size={25} className="deletar" onClick={aoDeletar}/>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4 style={{Color: corDeFundo }}>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador