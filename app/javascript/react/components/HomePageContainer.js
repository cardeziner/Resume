import React from 'react'
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
    <div className="home-bg">
      <h1 className="red-title white col-xs-6 col-md-4 mx-auto center bold">MY RESUME</h1>
      <div className="row spacing">
        <div className="col-xs-12 col-md-4">
          <div className="top border">
            <h1 className="bold">personal details</h1>
          </div>
          <img className="top" src={selfphoto}/>
            <div className="border bottom">
              <div className="row">
                <div className="col-6 center"><h4 className="bold">role desired</h4><p className="soft center">Jr. Developer</p></div>
                <div className="col-6 center"><h4 className="bold">location</h4><p className="soft center">Denver</p></div>
                <div className="col-12"><h4 className="bold center">learning institution</h4></div>
                <div className="col-12"><p className="soft center">Launch Academy, Boston</p></div><hr className="center"/>
              </div>
              <div className="left">
                <p className="soft center"><img src={phone} className="my-logo"/><br/>781-690-1366</p>
                <p className="soft center"><img src={email} className="my-logo extra-small"/><br/>peter.mcbride.stevens@gmail.com</p>
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
        <div className="col-xs-12 col-md-8 borders vert">
          <div>
            <h1 className="bold padding-top aboutme">about me</h1><hr className="center"/>
            <h5 className="inline-block">Hello! My name is Peter Stevens and I am originally from Boston, MA and I have recently moved back to Denver. In my spare time, I like to golf, hike, go camping, and overall I love just spending time outdoors, so its no suprise why I moved back to Denver!  I have recently graduated from a full-stack development boot camp program at Launch Academy, and I am very excited to begin a new career in Software Development.</h5>
            <h5 className="inline-block">As I am looking for new opportunities and potential teams to join to grow my knowledge and expand my skills, I have been also trying to find a role that also excites me. I am currently looking for an opportunity where I am able to expand my skills with similar technologies I have already become accustomed to using and looking for opportunities to learn new technologies as well. I enjoy working with teams as well as individually, and love a good challenge.</h5>
            <h5 className="inline-block">Now that I am seeking a role where I can begin my career in software development, I have been doing several things to prepare for the opportunity. Right after graduation, I continued working on my FriendTrip project (which you can find more information on the “Projects” page). I then temporarily put that aside to build and provide you with this resume project. I wanted to continue to exercise the knowledge I’ve gained, and also  further develop my front-end skills. I have also continued to further my knowledge by working with new APIs, attending remote tech events, and trying to learn new technologies like Express. Overall, I have been trying to keep up with my coding, and learning new ways to make my code more efficient and RESTful. </h5>
            <h5 className="inline-block">I would like to thank you for taking the time to look at my website, and I look forward to you getting to learn a little more about me! To learn more about myself and my coding experience so far, feel free to visit my <a href="https://launchpass.launchacademy.com/users/PeterStevens/launcher_profile"> Launcher Profile</a>!</h5>
            <hr className="center"/>
          </div>
          <div className="row">
            <div className="col-4"><Link to='/education' style={{ textDecoration: 'none', color: 'white' }}><h1 className="borders school-button bold">Education</h1></Link></div>
            <div className="col-4"><Link to='/jobs' style={{ textDecoration: 'none', color: 'white' }}><h1 className="borders work-button bold">Job History</h1></Link></div>
            <div className="col-4"><Link to='/projects' style={{ textDecoration: 'none', color: 'white' }}><h1 className="borders project-button bold">Projects</h1></Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageContainer
