import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Feed from '../Routes/Feed'
import Auth from '../Routes/Auth'

const PublicRoutes = () => (
  <React.Fragment>
    <Route exact path='/' component={Feed} />
  </React.Fragment>
)

const PrivateRoutes = () => (
  <React.Fragment>
    <Route exact path='/' component={Auth} />
  </React.Fragment>
)

const AppRouter = ({ isLoginedIn = false }: { isLoginedIn: boolean }) => {
  return (
    <Router>
      <Switch>{isLoginedIn ? <PrivateRoutes /> : <PublicRoutes />}</Switch>
    </Router>
  )
}

export default AppRouter
