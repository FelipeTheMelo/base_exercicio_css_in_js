import { useState } from 'react'

type FormVagasProps = {
    aoEnviar?: (vaga: string) => void
    aoPesquisar?: (termo: string) => void
}

const FormVagas = ({ aoEnviar, aoPesquisar }: FormVagasProps) => {
const [input, setInput] = useState('')

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (aoPesquisar) {
        aoPesquisar(input)
    } else if (aoEnviar) {
        aoEnviar(input)
        setInput('')
    }
}

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={aoPesquisar ? 'Pesquisar vaga' : 'Digite uma nova vaga'}
    />
    <button type="submit">{aoPesquisar ? 'Pesquisar' : 'Adicionar'}</button>
    </form>
)}

export default FormVagas