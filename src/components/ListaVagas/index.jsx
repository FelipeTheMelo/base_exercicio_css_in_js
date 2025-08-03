import React from 'react'
import { ListaContainer } from './index.styles'
import Vaga from '../Vaga'

export default function ListaVagas({ vagas }) {
  return (
    <ListaContainer>
      {vagas.map((vaga, index) => (
        <Vaga key={index} titulo={vaga.titulo} descricao={vaga.descricao} />
      ))}
    </ListaContainer>
  )
}
