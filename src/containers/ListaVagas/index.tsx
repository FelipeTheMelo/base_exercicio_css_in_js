import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import Vaga from '../../components/Vaga'
import FormVagas from '../../components/FormVagas'

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 16px;
`

const VagasGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
    padding: 0;
    margin: 32px auto 0;
    list-style: none;
`

type VagaType = {
    id: string | number
    titulo: string
    localizacao: string
    nivel: string
    modalidade: string
    salarioMin: number
    salarioMax: number
    requisitos: string[]
}

type Props = {
    vagas: VagaType[]
}

const ListaVagas: React.FC<Props> = ({ vagas }) => {
    const [filtro, setFiltro] = useState('')

    const vagasFiltradas = useMemo(() => {
        if (!filtro) return vagas
        const termo = filtro.toLowerCase()
        return vagas.filter(
        (vaga) =>
            vaga.titulo.toLowerCase().includes(termo) ||
            vaga.requisitos.some((req) => req.toLowerCase().includes(termo))
        )
    }, [filtro, vagas])

    return (
        <Container>
        <FormVagas aoPesquisar={setFiltro} />
        <VagasGrid>
            {vagasFiltradas.map((vaga) => (
            <Vaga key={vaga.id} {...vaga} />
            ))}
        </VagasGrid>
        </Container>
    )
}

export default ListaVagas