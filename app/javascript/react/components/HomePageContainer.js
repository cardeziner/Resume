import React from 'react'
import ProfileContainer from './ProfileContainer'
import SampleBox from './SampleBox'
import selfphoto from '../../../assets/images/profilepic.png'
import github from '../../../assets/images/github.png'
import linkedin from '../../../assets/images/linkedin.png'
import facebook from '../../../assets/images/facebook.png'
import launch from '../../../assets/images/launch.png'
import { Container, Row, Col } from 'react-bootstrap'


const HomePageContainer = (props) =>{
  return(
    <div className="row spacing">
      <div className="col-4">
        <div className="top border">
          <h1 className="bold">personal details</h1>
        </div>
        <img className="top" src={selfphoto}/>
          <div className="border bottom">
            <div className="row col">
              <div className="col-6"><h3 className="bold center">age</h3><h4 className="soft center">30 y/o</h4></div>
              <div className="col-6"><h3 className="bold center">location</h3><h4 className="soft center">Denver</h4></div>
              <div className="col-12"><h3 className="bold center">learning institution</h3></div>
              <div className="col-12"><h4 className="soft center">Launch Academy, Boston</h4></div><hr className="center"/>
            </div>
            <div className="row bot-pad">
                <div className="col-3 center"><a href="http://www.github.com/cardeziner"><img className="logo" src={github}/></a></div>
                <div className="col-3 center"><a href="http://www.linkedin.com/in/petermcbridestevens"><img className="logo" src={linkedin}/></a></div>
                <div className="col-3 center"><a href="http://www.facebook.com/peter.stevens.14"><img className="logo" src={facebook}/></a></div>
                <div className="col-3 center"><a href="http://www.linked.com/petermcbridestevens"><img className="logo" src={launch}/></a></div>
            </div>
          </div>
        </div>
      <div className="col-8 borders">
      <h1 className="bold">Hello</h1></div><hr className="center"/>
    </div>
  )
}

export default HomePageContainer
// <h2 className="bold center">Peter Stevens</h2>
// <h2 className="bold left center">age</h2><h4 className="soft right">30<br></br>hello</h4>
// <h2 className="left left">hello</h2>
