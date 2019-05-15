import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useQuery } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'
import GlobalStyles from '../Styles/GlobalStyles'
import Theme from '../Styles/Theme'
import AppRouter from './Router'

const QUERY = gql`
  {
    isLoggedIn @client
  }
`

const App: React.FC = () => {
  const { data } = useQuery(QUERY)

  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <AppRouter isLoginedIn={data.isLoggedIn} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
