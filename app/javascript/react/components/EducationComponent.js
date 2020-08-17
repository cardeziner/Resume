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
            <p className="inline-block soft">I have always been very artistic. I grew up always drawing and coming up with my own car designs, and when I started thinking about college, I thought it would be great to dig deeper into how the industry works and what it takes. And thats when I decided to study Industrial Design at MSU Denver.</p>
            <p className="inline-block soft">During my time at MSU, I not only practiced and improved on my drawing and sketching skills, but I also learned about fabrication of different materials. Understanding the processes for fabrication with wood, metal, and plastic gave me insight on how to make my designs stylish and functional, but also more efficient for the production process.</p>
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
            <p className="inline-block soft">Before my time at Launch Academy, I was brand new to coding,  have always been very technically minded, great with computers, and was always interested on the mechanic of how computers work, so when my sister told me about Launch, I decided this was a great opportunity to not only learn more about computers and coding, but also an exciting career to get involved in. </p>
            <p className="inline-block soft">As an intense full stack development boot camp program, I not only learned new languages,  HTML and CSS, but I also learned about how to synchronously write code between multiple components. During my time at Launch I have learned how to write testing with capybara and spec, create forms, API integration, React on Rails, Ruby on Rails, and more. Since my graduation, I have been continuously coding to not only practice my skills, but to get more comfortable with the knowledge I have gained. I look forward to finding a company where I can not only continue but also expand my skills and knowledge.</p>
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
