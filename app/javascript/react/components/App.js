import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePageContainer from './HomePageContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePageContainer}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
