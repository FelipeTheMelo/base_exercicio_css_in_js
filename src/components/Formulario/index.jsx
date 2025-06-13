import React from 'react'
import * as S from './styles'

const Formulario = () => (
    <S.Form>
    <S.Input type="text" placeholder="Digite o título da vaga" />
    <S.Button>Pesquisar</S.Button>
    </S.Form>
)

export default Formulario