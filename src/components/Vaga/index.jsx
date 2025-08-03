import React from 'react'
import { VagaContainer, Titulo, Descricao } from './index.styles'

export default function Vaga({ titulo, descricao }) {
  return (
    <VagaContainer>
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
    </VagaContainer>
  )
}
