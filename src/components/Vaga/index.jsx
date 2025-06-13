import React from 'react'
import * as S from './styles'

const Vaga = ({ titulo, local, descricao }) => (
  <S.Card>
    <S.Titulo>{titulo}</S.Titulo>
    <S.Local>{local}</S.Local>
    <S.Descricao>{descricao}</S.Descricao>
  </S.Card>
)

export default Vaga