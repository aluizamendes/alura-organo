import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    required: boolean
    valor: string
    itens: string[]
}

const ListaSuspensa = (props: ListaSuspensaProps) => {

    return (
        <>
        <div className='lista-suspensa'>
            <label>{props.label}:</label>
            <select 
                onChange={evt => props.aoAlterado(evt.target.value)}
                required={props.required} 
                value={props.valor}
            >
                <option>Selecione um time</option>
                { props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
        </>
    )
}

export default ListaSuspensa