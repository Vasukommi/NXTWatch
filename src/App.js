import {Route, Switch} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login'

import './App.css'

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <ProtectedRoute path="/" component={Home} />
  </Switch>
)

export default App
