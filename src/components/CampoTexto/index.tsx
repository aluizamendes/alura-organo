import './CampoTexto.css'

interface CampoTextoProps {
    obrigatorio?: boolean
    label: string
    placeholder: string
    valor: string
    aoAlterado: (valor: string) => void
}

const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }: CampoTextoProps) => {

    const aoDigitado = (evt: React.ChangeEvent<HTMLInputElement>) => {
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