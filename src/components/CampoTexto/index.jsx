import './CampoTexto.css'

const CampoTexto = ({ obrigatorio, label, placeholder, valor, aoAlterado }) => {

    const aoDigitado = (evt) => {
        aoAlterado(evt.target.value)
    }

    return (
        <>
            <div className='campo-texto'>
                <label>{ label }:</label>
                <input 
                    value={valor} 
                    onChange={aoDigitado} 
                    required={obrigatorio} 
                    type="text" 
                    placeholder={placeholder} 
                />
                
            </div>
        </>
    )
}

export default CampoTexto