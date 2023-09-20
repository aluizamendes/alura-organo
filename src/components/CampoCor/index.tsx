import './CampoCor.css'

interface CampoCorProps {
    obrigatorio: boolean
    label: string
    placeholder?: string
    valor: string
    aoAlterado: (valor: string) => void
}

export default function CampoCor({ obrigatorio, label, placeholder, valor, aoAlterado }: CampoCorProps) {

    const aoSelecionado = (evt: React.ChangeEvent<HTMLInputElement>) => {
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