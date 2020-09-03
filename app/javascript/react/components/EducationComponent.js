import React from 'react'
import launchlogo from '../../../assets/images/launch-logo.png'
import msulogo from '../../../assets/images/msu-logo.jpeg'

const EducationComponent = (props) =>{
  return(
    <div className="bg-school">
      <div>
        <h1 className="yellow-title white col-4 mx-auto center bold">EDUCATION</h1>
        <div className="row spacing">
          <div className="col-6">
            <div className="borders no-blur"><br/>
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
              <p className="inline-block soft">Since I was very young, art was always a personal hobby of mine. I grew up always drawing and creating my own car designs, and when I started thinking about college, I thought it would be great to dig deeper into how the automoitive design industry works and what it takes. And thats when I decided to study Industrial Design at MSU Denver.</p>
              <p className="inline-block soft">During my time at MSU, I not only practiced and improved on my drawing and sketching skills, but I also learned about fabrication of different materials. Understanding the processes for fabrication with wood, metal, and plastic gave me insight on how to make my designs stylish and functional, but also more efficient for the production process.</p>
              <hr className="center"/>
              <h4 className="bold center">Specialties</h4>
                <div className="inline-block row no-bull">
                  <div className="col-6">
                    <li>Digital Rendering</li>
                    <li>Adobe</li>
                    <li>Plastic Fabrication</li>
                    <li>Metal Fabrication</li>
                    <li>Wood Fabrication</li>
                    <li>AutoCAD</li>
                  </div>
                  <div className="col-6">
                    <li>Vacuum Forming</li>
                    <li>Fiberglass Production</li>
                    <li>Tig Welding</li>
                    <li>3D Printing</li>
                    <li>Sheet Metal Laser Cutting</li>
                    <li>SolidWorks</li>
                  </div>
                </div>
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
                    <h4 className="bold">certification</h4>
                    <p className="soft">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              <hr className="center"/>
              <h4 className="bold center">what i learned </h4>
              <p className="inline-block soft">Before my time at Launch Academy, I was brand new to coding. I had always been very technically minded, great with computers, and was always interested in the mechanics of how computers work. Even though I was the youngest, I was usually the one teaching members of my family how our home computer worked. So, when my sister told me about Launch, I decided this was a great opportunity to not only learn more about computers and coding, but also an opportunity to become part of an exciting career that I could enjoy, and be successful at. </p>
              <p className="inline-block soft">As an intense full stack development boot camp program, I not only learned new languages,  HTML and CSS, but I also learned about how to synchronously write code between multiple components. During my time at Launch I have learned how to write testing with Capybara and Rspec, create forms, API integration, React on Rails, Ruby on Rails, and more. Since my graduation, I have been continuously coding to not only practice my skills, but to get more comfortable with the knowledge I have gained. I look forward to finding a company where I can not only continue but also expand my skills and knowledge.</p>
                <hr className="center"/>
              <h4 className="bold center">Specialties</h4>
              <div className="row">
                <div className="inline-block no-bull col-6">
                  <li>Ruby</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Capybara Testing</li>
                  <li>API Integration</li>
                  <li>Databases</li>
                  <li>JSON</li>
                  <li>ActiveRecord Models</li>
                </div>
                <div className="inline-block no-bull col-6">
                  <li>Routing</li>
                  <li>Ruby on Rails</li>
                  <li>React on Rails</li>
                  <li>CSS</li>
                  <li>Devise</li>
                  <li>PostgreSQL</li>
                  <li>OOP</li>
                  <li>RESTful Actions</li>
                  <li>Routing</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationComponent
