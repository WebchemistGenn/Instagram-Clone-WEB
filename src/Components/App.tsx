import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useQuery } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'
import GlobalStyles from '../Styles/GlobalStyles'
import theme from '../Styles/Theme'
import AppRouter from './Router'
import Footer from './Footer'

const QUERY = gql`
  {
    isLoggedIn @client
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 935px;
  margin: 0 auto;
`

const App: React.FC = () => {
  const { data } = useQuery(QUERY)

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <AppRouter isLoginedIn={data.isLoggedIn} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
