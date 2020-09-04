import React from 'react'
import ssr from '../../../assets/images/ssr-logo.png'
import ft from '../../../assets/images/ft-logo.png'
import pp from '../../../assets/images/resume-pic.png'
import git from '../../../assets/images/github.png'
import ReactPlayer from "react-player"

const ProjectsComponent = props =>{

  return(
    <div className="bg-proj">
      <div>
      <h1 className="green-title white col-xs-6 col-md-4 mx-auto center bold">PROJECTS</h1>
      <div className="row spacing">
        <div className="col-xs-12 col-md-4 gap">
          <div className="borders"><br/>
            <a href="http://silver-spoon-reviews.herokuapp.com" target="_blank"><img className="circles-gr" src={ssr}/></a>
            <hr className ="center"/>
            <h3 className="bold gray">silver spoon reviews</h3>
            <div className="inline-block soft">
              <p>This project is a two-week build, designed to give users a website to review high-end restaurants in Boston, MA. Users can create an account to be able to write reviews, as well as add new restaurants to the list. Non-users can view all restaurants and reviews but do not have access to edit information. This was a collaborative project that was built by myself and 3 of my colleagues at Launch Academy. </p>
            </div>
            <hr className ="center"/>
            <h3 className="bold gray ">technologies used</h3>
            <div className="row no-bull">
              <div className="col-6">
                <li className="soft green">Devise</li>
                <li className="soft green">User Authentication</li>
                <li className="soft green">Ruby</li>
                <li className="soft green">API Integration</li>
                <li className="soft green">CSS</li>
                <li className="soft green">JavaScript</li>
              </div>
              <div className="col-6">
              <li className="soft green">React on Rails</li>
              <li className="soft green">Javascript</li>
              <li className="soft green">React.js</li>
              <li className="soft green">PostgreSQL</li>
              <li className="soft green">HTML Forms</li>
              <li className="soft green">Rspec</li>
              </div>
            </div>
            <hr className ="center"/>
            <div>
              <h3 className="bold gray">github & code</h3>
              <a href="https://github.com/rmlance/silver-spoon-reviews"><img className="gr-circ" src={git}/></a>
              <h1 className="bot-pad"></h1>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4">
          <div className="borders">
            <a href="http://friendtrip-bt.herokuapp.com" target="_blank"><img className="ft" src={ft}/></a>
            <hr className="center"/>
            <h3 className="bold gray">friendtrip</h3>
            <div className="inline-block">
              <p className="soft">FriendTrip was my first solo project, that I initially build as a final project during my time at Launch Academy. FriendTrip is a React/Rails app that was designed to make planning trips for groups simple and fun. Using a vote system on events, users are able to add events to particular trips, which go on a shared itinerary for each member of the trip. </p>
            </div>
            <hr className ="center"/>
            <h3 className="bold gray ">technologies used</h3>
            <div className="row no-bull">
              <div className="col-6">
                <li className="soft green">Devise</li>
                <li className="soft green">User Authentication</li>
                <li className="soft green">Google Maps API</li>
                <li className="soft green">API Integration</li>
                <li className="soft green">CSS</li>
                <li className="soft green">JavaScript</li>
              </div>
              <div className="col-6">
              <li className="soft green">Ruby on Rails</li>
              <li className="soft green">Javascript</li>
              <li className="soft green">React.js</li>
              <li className="soft green">PostgreSQL</li>
              <li className="soft green">HTML Forms</li>
              <li className="soft green">Rspec</li>
              </div>
            </div>
            <hr className ="center"/>
              <h3 className="bold green">pitch video</h3>
              <div className="wrapper">
                <ReactPlayer
                  className="player"
                  url="https://vimeo.com/420022386"
                  width='100%'
                  height='100%'
                  />
              </div>
            <hr className ="center"/>
            <div>
              <h3 className="bold gray">github & code</h3>
              <a href="https://github.com/cardeziner/FriendTrip"><img className="gr-circ" src={git}/></a>
              <h1 className="bot-pad"></h1>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-4 gap">
          <div className="borders">
            <a href="http://peters-resume.herokuapp.com" target="_blank"><img className="pad-bot" src={pp}/></a>
            <hr className="center"/>
            <h3 className="gray bold">my resume</h3>
            <div className="inline-block soft">
              <p>What you are looking at on this website is my resume project. In an effort to combine my skills with my past experiences, and also as a way for someone such as yourself to get to know me better, this project has been a great opportunity to start from scratch after graduation, improve my skills, and build something completely new.</p>
              <p></p>
            </div>
            <hr className ="center"/>
            <h3 className="bold gray ">technologies used</h3>
            <div className="row no-bull">
              <div className="col-12 center">
                <li className="soft green">React.JS</li>
                <li className="soft green">JavaScript</li>
                <li className="soft green">Ruby</li>
                <li className="soft green">API Integration</li>
                <li className="soft green">CSS</li>
                <li className="soft green">HTML</li>
                <li className="soft green">ActiveRecord</li>
                <li className="soft green">Rails</li>
              </div>
            </div>
            <hr className ="center"/>
            <div>
              <h3 className="bold gray">github & code</h3>
              <a href="https://github.com/cardeziner/Resume"><img className="gr-circ" src={git}/></a>
              <h1 className="bot-pad"></h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProjectsComponent
