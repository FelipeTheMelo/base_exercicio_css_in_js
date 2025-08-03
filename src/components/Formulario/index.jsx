import React from 'react'
import { FormContainer, Input, Button } from './index.styles'

export default function Formulario() {
  return (
    <FormContainer>
      <Input type="text" placeholder="Digite seu nome" />
      <Input type="email" placeholder="Digite seu email" />
      <Button>Enviar</Button>
    </FormContainer>
  )
}
