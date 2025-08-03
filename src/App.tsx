import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Formulario from './components/Formulario'
import ListaVagas from './components/ListaVagas'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  // Lista de vagas que será exibida no componente ListaVagas
  const vagas = [
    { titulo: 'Desenvolvedor Frontend', descricao: 'React, CSS, JavaScript' },
    { titulo: 'Designer UI/UX', descricao: 'Figma, Adobe XD, Design System' },
    { titulo: 'QA Tester', descricao: 'Testes automatizados e manuais' }
  ]

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <Formulario />
      <ListaVagas vagas={vagas} />
    </ThemeProvider>
  )
}

export default App
