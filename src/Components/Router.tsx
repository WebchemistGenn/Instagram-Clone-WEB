import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
    <Router>
      <Switch>{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}</Switch>
    </Router>
  )
}

export default AppRouter
