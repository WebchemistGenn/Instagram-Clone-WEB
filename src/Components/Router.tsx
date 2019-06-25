import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Feed from '../Routes/Feed'
import Auth from '../Routes/Auth'

const PublicRoutes = () => (
  <React.Fragment>
    <Route exact path='/' component={Auth} />
  </React.Fragment>
)

const PrivateRoutes = () => (
  <React.Fragment>
    <Route exact path='/' component={Feed} />
  </React.Fragment>
)

const AppRouter = ({ isLoggedIn = false }: { isLoggedIn: boolean }) => {
  console.log(isLoggedIn)
  return (
    <Switch>{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}</Switch>
  )
}

export default AppRouter
