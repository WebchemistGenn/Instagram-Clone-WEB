import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components'
import { useQuery } from 'react-apollo-hooks'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { gql } from 'apollo-boost'
import GlobalStyles from '../Styles/GlobalStyles'
import theme from '../Styles/Theme'
import AppRouter from './Router'
import Header from './Header';
import Footer from './Footer'

const QUERY = gql`
  {
    isLoggedIn @client
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: ${p => p.theme.maxWidth};
  margin: 0 auto;
`

const App: React.FC = () => {
  const { data } = useQuery(QUERY)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Wrapper>
          <GlobalStyles />
          <AppRouter isLoggedIn={data.isLoggedIn} />
          <Footer />
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </Wrapper>
      </Router>
    </ThemeProvider>
  )
}

export default App
