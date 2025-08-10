import React from 'react'
import styled from 'styled-components'

const VagaContainer = styled.li`
  border: 1px solid hsl(var(--primary));
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: hsl(var(--job-card-hover));
    color: hsl(var(--job-card-hover-foreground));
  }

  &:hover a {
    border-color: hsl(var(--job-card-hover));
    background-color: hsl(var(--job-card-hover-foreground));
    color: hsl(var(--job-card-hover));
  }
`

const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
  font-size: 18px;
`

const VagaDetalhes = styled.ul`
  margin-bottom: 16px;

  li {
    margin-bottom: 8px;
    color: inherit;
  }
`

const VagaLink = styled.a`
  border-color: hsl(var(--card));
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
  transition: all ease 0.3s;
  border: 1px solid hsl(var(--primary));

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga: React.FC<Props> = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos,
}) => (
  <VagaContainer>
    <VagaTitulo>{titulo}</VagaTitulo>
    <VagaDetalhes>
      <li>Localização: {localizacao}</li>
      <li>Senioridade: {nivel}</li>
      <li>Tipo de contratação: {modalidade}</li>
      <li>
        Salário: {salarioMin} - {salarioMax}
      </li>
      <li>Requisitos: {requisitos.join(', ')}</li>
    </VagaDetalhes>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
)

export default Vaga