import React from 'react'
import Vaga from '../Vaga'
import * as S from './styles'

const ListaVagas = () => (
    <S.Secao>
    <S.Titulo>Vagas disponíveis</S.Titulo>

    <Vaga
        titulo="Desenvolvedor Front-end"
        local="São Paulo - SP"
        descricao="Desenvolver interfaces modernas e responsivas."
    />

    <Vaga
        titulo="Desenvolvedor Back-end"
        local="Remoto"
        descricao="Criar APIs escaláveis e bem estruturadas."
    />
    </S.Secao>
)

export default ListaVagas