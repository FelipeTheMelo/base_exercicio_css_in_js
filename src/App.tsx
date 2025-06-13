import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Formulario from './components/Formulario'
import ListaVagas from './ListaVagas'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <Formulario />
      <ListaVagas />
    </ThemeProvider>
  )
}

export default App