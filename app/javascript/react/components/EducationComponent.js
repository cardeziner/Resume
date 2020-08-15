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
            <a href="http://www.msudenver.edu"><img className="circles" src={msulogo}/></a>
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
                  <h4 className="bold">curriculum / area of study</h4>
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
            <a href="http://www.launchacademy.com"><img className="circles" src={launchlogo}/></a>
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
            <p className="inline-block soft">I am a recent graduate from Launch Academy, one of the top coding schools in Boston. I have always had an interest in computers and web design, so it only made sense that I finally took the steps to become an experienced developer. I learned how to do full stack programming and learned a variety of languages and technology. Now that I have the skills I need to succeed, I am seeking a team that will help me learn even more, one that will allow me to utilize the new skills I have learned, and one that will allow me to expand on my skills!</p>
            <hr className="center"/>
            <h4 className="bold center">Specialties</h4>
            <p classNamer="inline-block no-bull">
              <li>Ruby</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationComponent
