import React from 'react'
import ProfileContainer from './ProfileContainer'
import SampleBox from './SampleBox'
import image from '../../../assets/images/profilepic.png'
import { Container, Row, Col } from 'react-bootstrap'

const HomePageContainer = (props) =>{
  return(
    <div>
      <div className="profile-box">
      <h2 className="title-1">About Me</h2>
      <img src={image}/>
      <div>
        <h2 className="text-1">
          Peter Stevens
        </h2>
      </div>
      </div>
      <Container>
  <Row>
    <Col className="col-color">1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
    </div>
  )
}

export default HomePageContainer
