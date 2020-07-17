import React from 'react'
import ProfileContainer from './ProfileContainer'
import SampleBox from './SampleBox'
import image from '../../../assets/images/profilepic.png'
import { Container, Row, Col } from 'react-bootstrap'

const HomePageContainer = (props) =>{
  return(
    <div>
      <Container>
        <Row>
          <div>
            <div className="profile-box">
              <h2 className="western">Welcome</h2>
              <img src={image}/>
            <div>
              <h1 className="western">
                Peter Stevens
              </h1>
            </div>
          </div>
        </div>
        </Row>
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default HomePageContainer
