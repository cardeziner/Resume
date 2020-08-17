import React from 'react'
import ProfileContainer from './ProfileContainer'
import EducationComponent from './EducationComponent'
import selfphoto from '../../../assets/images/profilepic.png'
import github from '../../../assets/images/github.png'
import linkedin from '../../../assets/images/linkedin.png'
import facebook from '../../../assets/images/facebook.png'
import launch from '../../../assets/images/launch.png'
import aboutme from '../../../assets/images/aboutme.jpeg'
import email from '../../../assets/images/email-logo.png'
import phone from '../../../assets/images/phone-logo.png'
import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'


const HomePageContainer = (props) =>{
  return(
    <div className="bg-main">
      <div className="row spacing">
        <div className="col-4">
          <div className="top border">
            <h1 className="bold">personal details</h1>
          </div>
          <img className="top" src={selfphoto}/>
            <div className="border bottom">
              <div className="row">
                <div className="col-6 center"><h4 className="bold">Level</h4><p className="soft center">Jr. Developer</p></div>
                <div className="col-6 center"><h4 className="bold">location</h4><p className="soft center">Denver</p></div>
                <div className="col-12"><h4 className="bold center">learning institution</h4></div>
                <div className="col-12"><p className="soft center">Launch Academy, Boston</p></div><hr className="center"/>
              </div>
              <div className="left left-pad">
                <p className="soft"><img src={phone} className="my-logo"/>781-690-1366</p>
                <p className="soft"><img src={email} className="my-logo small"/>peter.mcbride.stevens@gmail.com</p>
              </div>
              <hr className="center"/>
              <div className="row bot-pad">
                <div className="col-3 center"><a href="http://www.github.com/cardeziner"><img className="logo" src={github}/></a></div>
                <div className="col-3 center"><a href="http://www.linkedin.com/in/petermcbridestevens"><img className="logo" src={linkedin}/></a></div>
                <div className="col-3 center"><a href="http://www.facebook.com/peter.stevens.14"><img className="logo" src={facebook}/></a></div>
                <div className="col-3 center"><a href="https://launchpass.launchacademy.com/users/PeterStevens/launcher_profile"><img className="logo" src={launch}/></a></div>
              </div>
            </div>
          </div>
        <div className="col-8 borders">
          <div>
            <h1 className="bold padding-top aboutme">about me</h1><hr className="center"/>
            <h5 className="inline-block">Hello! My name is Peter Stevens and I am originally from Boston, MA, but have recently moved back to Denver. In my spare time, I like to go on hikes, I love camping, and I love just spending time outdoors, so its no suprise how I have recently just moved back to Denver!  I have recently graduated from a full-stack development boot camp program at Launch Academy, and I am very excited to begin a new career in software development.</h5>
            <h5 className="inline-block">As I am looking for new opportunities and potential teams to join to grow my knowledge and expand my skills, I have been also trying to find a role that also excites me. I am currently looking for an opportunity where I am able to expand my skills with similar technologies I have already become accustomed to using and looking for opportunities to learn new technologies as well. I enjoy working with teams as well as individually, and love a good challenge.</h5>
            <h5 className="inline-block">Recently, I have been working on improving my skills throughout my time since graduation by learning new technologies and coding strategies which include working with Express, improving my front-end capabilities, and I have also been attending a number of tech events to stay in the loop with whats going on in the industry, and to learn about new ways to make my code more efficient and RESTful. I would like to thank you for taking the time to look at my website, and I look forward to you getting to learn a little more about me! to learn more about myself and my coding experience so far, feel free to visit my <a href="https://launchpass.launchacademy.com/users/PeterStevens/launcher_profile"> Launcher Profile</a>!</h5>
            <hr className="center"/>
          </div>
          <div className="row">
            <div className="col-4"><Link to='/education' style={{ textDecoration: 'none', color: 'white' }}><h2 className="yellow-box mid bold">Education</h2></Link></div>
            <div className="col-4"><Link to='/jobs' style={{ textDecoration: 'none', color: 'white' }}><h3 className="orange-box mid bold">Work History</h3></Link></div>
            <div className="col-4"><Link to='/projects' style={{ textDecoration: 'none', color: 'white' }}><h2 className="green-box mid bold">Projects</h2></Link></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePageContainer
// <h2 className="bold center">Peter Stevens</h2>
// <h2 className="bold left center">age</h2><h4 className="soft right">30<br></br>hello</h4>
// <h2 className="left left">hello</h2>
