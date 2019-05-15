import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../Styles/GlobalStyles'
import Theme from '../Styles/Theme'
import AppRouter from './Router'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <AppRouter isLoginedIn={false} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
