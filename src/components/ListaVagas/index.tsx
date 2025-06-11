import { useState } from 'react'
import FormVagas from '../FormVagas'
import Vaga from '../Vaga'

import styles from './ListaVagas.module.css'

const ListaVagas = () => {
const [filtro, setFiltro] = useState('')
const [vagas, setVagas] = useState([
    {
        id: 1,
        titulo: 'Desenvolvedor Front-End',
        localizacao: 'Remoto',
        nivel: 'Júnior',
        modalidade: 'CLT',
        salarioMin: 3000,
        salarioMax: 5000,
        requisitos: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
        id: 2,
        titulo: 'Desenvolvedor Back-End',
        localizacao: 'São Paulo',
        nivel: 'Pleno',
        modalidade: 'PJ',
        salarioMin: 6000,
        salarioMax: 9000,
        requisitos: ['Node.js', 'Express', 'MongoDB']
    }
])

const vagasFiltradas = vagas.filter((vaga) =>
    vaga.titulo.toLowerCase().includes(filtro.toLowerCase()))

return (
    <div>
        <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
        <ul className={styles.vagas}>
        {vagasFiltradas.map((vaga) => (
            <Vaga
            key={vaga.id}
            titulo={vaga.titulo}
            localizacao={vaga.localizacao}
            nivel={vaga.nivel}
            modalidade={vaga.modalidade}
            salarioMin={vaga.salarioMin}
            salarioMax={vaga.salarioMax}
            requisitos={vaga.requisitos}
            />
        ))}
        </ul>
    </div>
)}

export default ListaVagas