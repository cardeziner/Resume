import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import EducationComponent from './EducationComponent'
import HomePageContainer from './HomePageContainer'
import JobsComponent from './JobsComponent'
import ProjectsComponent from './ProjectsComponent'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePageContainer}></Route>
        <Route exact path='/education' component={EducationComponent}></Route>
        <Route exact path='/jobs' component={JobsComponent}></Route>
        <Route exact path='/projects' component={ProjectsComponent}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
