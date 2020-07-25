import React from 'react'
import ProfileContainer from './ProfileContainer'
import SampleBox from './SampleBox'
import image1 from '../../../assets/images/profilepic.png'
import image2 from '../../../assets/images/github.png'
import { Container, Row, Col } from 'react-bootstrap'

const HomePageContainer = (props) =>{
  return(
    <div className="row spacing">
      <div className="col-4">
        <div className="top border">
          <h1 className="bold">personal details</h1>
        </div>
        <img className="bottom top" src={image1}/>
          <div className="border bottom">
            <div className="row col">
              <div className="col-6"><h3 className="bold center">age</h3><h4 className="soft center">30 y/o</h4></div>
              <div className="col-6"><h3 className="bold left">location</h3><h4 className="soft center">Denver</h4></div>
              <div className="col-12"><h3 className="bold left center">learning institution</h3></div>
              <div className="col-12"><h4 className="soft left center">Launch Academy, Boston</h4></div>
              <div className="col-3"><img href="http://www.github.com/cardeziner" src={image2}/></div>
              <div className="col-3"></div>
              <div className="col-3"></div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      <div className="col-8 border">Hello</div>
    </div>
  )
}

export default HomePageContainer
// <h2 className="bold center">Peter Stevens</h2>
// <h2 className="bold left center">age</h2><h4 className="soft right">30<br></br>hello</h4>
// <h2 className="left left">hello</h2>
