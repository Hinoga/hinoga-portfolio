import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import 'assets/css/bootstrap.min.css'
import 'assets/scss/now-ui-kit.scss?v=1.4.0'
import 'assets/demo/demo.css?v=1.4.0'
import 'assets/demo/nucleo-icons-page-styles.css?v=1.4.0'

import ProfilePage from './views/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Switch>
          <Route path='/' render={props => <ProfilePage {...props} />} />
          <Redirect to='/' />
        </Switch>
      </Switch>
    </BrowserRouter>
  )
}

export default App
