import React from 'react'
import ProfileContainer from './ProfileContainer'
import SampleBox from './SampleBox'
import image from '../../../assets/images/profilepic.png'
import { Container, Row, Col } from 'react-bootstrap'

const HomePageContainer = (props) =>{
  return(
    <div className="row spacing">
      <div className="col-4">
        <div className="top border">
          <h1 className="bold">personal details</h1>
        </div>
        <img src={image}/>
          <div className="border">
            <div className="row">
              <div className="column"><h2 className="bold left">age</h2><br></br><h2 className="bold left">location</h2></div>
              <div className="column right"><h4 className="soft right">30</h4><br></br><h4 className="soft right">Denver Colorado</h4><br></br></div>
            </div>
          </div>
          </div>
      <div className="col-8">Hello</div>
    </div>
  )
}

export default HomePageContainer
// <h2 className="bold center">Peter Stevens</h2>
// <h2 className="bold left center">age</h2><h4 className="soft right">30<br></br>hello</h4>
// <h2 className="left left">hello</h2>
