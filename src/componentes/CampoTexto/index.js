import './CampoTexto.css'

const CampoTexto = ({type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false}) => {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return(
        <div className={type == 'text'?`campo-texto`:`campo-cor`}>
            <label>{label}</label>
            <input 
                type={type} 
                value = {valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default CampoTexto