import React from 'react'
import launchlogo from '../../../assets/images/launch-logo.png'
import msulogo from '../../../assets/images/msu-logo.jpeg'

const EducationComponent = (props) =>{
  return(
    <div>
      <h1 className="yellow-title white col-4 mx-auto center bold">EDUCATION</h1>
      <div className="row spacing gap">
        <div className="col-6 ">
          <div className="borders"><br/>
            <img className="circles" src={msulogo}/>
            <h3 className="bold"><br/>Metropolitan State University of Denver</h3>
            <hr className="center"/>
            <div className="inline-block">
              <div className="row">
                <div className="col-6">
                  <h4 className="bold">location</h4>
                  <p className="soft">Denver, CO</p>
                </div>
                <div className="col-6">
                  <h4 className="bold">years attended</h4>
                  <p className="soft">2014 - 2017</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h4 className="bold">degree</h4>
                  <p className="soft">Industrial Design</p>
                </div>
              </div>
            </div>
            <hr className="center"/>
            <h4 className="bold center">what i learned </h4>
            <p className="inline-block soft">I have always been very artistic. I grew up always drawing and creating my own cars as a kid, and when I started thinking about college, I thought it would be great to dig deeper into how the industry works and what it takes. And thats when I decided to study Industrial Design at MSU Denver.</p>
          </div>
        </div>
        <div className="col-6">
          <div className="borders"><br/>
            <img className="circles" src={launchlogo}/>
            <h3 className="bold"><br/>Launch Academy - Full Stack Boot Camp</h3>
            <hr className="center"/>
            <div className="inline-block">
              <div className="row">
                <div className="col-6">
                  <h4 className="bold">location</h4>
                  <p className="soft">Denver, CO</p>
                </div>
                <div className="col-6">
                  <h4 className="bold">years attended</h4>
                  <p className="soft">2019 - 2020</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h4 className="bold">Certification</h4>
                  <p className="soft">Full Stack Developer</p>
                </div>
              </div>
            </div>
            <hr className="center"/>
            <h4 className="bold center">what i learned </h4>
            <p className="inline-block soft">As someone who never coded before, I managed to get a lot out of my experience at Launch Academy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationComponent
