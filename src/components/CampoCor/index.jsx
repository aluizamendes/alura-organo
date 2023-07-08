import './CampoCor.css'

const CampoCor = ({ obrigatorio, label, placeholder, valor, aoAlterado }) => {

    const aoSelecionado = (evt) => {
        aoAlterado(evt.target.value)
    }

    return (
        <>
            <div className='campo-cor'>
                <label>{ label }:</label>
                <input 
                    value={valor} 
                    onChange={aoSelecionado} 
                    required={obrigatorio} 
                    type="color"
                />
                
            </div>
        </>
    )
}

export default CampoCor