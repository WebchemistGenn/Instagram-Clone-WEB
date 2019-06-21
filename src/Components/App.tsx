import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useQuery } from 'react-apollo-hooks'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
        <AppRouter isLoggedIn={data.isLoggedIn} />
        <Footer />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
