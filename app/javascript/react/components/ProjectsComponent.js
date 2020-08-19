import React from 'react'
import ssr from '../../../assets/images/ssr-logo.png'
import ft from '../../../assets/images/ft-logo.png'
import pp from '../../../assets/images/resume-pic.png'
const ProjectsComponent = props =>{
  return(
    <div className="bg-proj">
      <div>
      <h1 className="green-title white col-4 mx-auto center bold">PROJECTS</h1>
      <div className="row spacing">
        <div className="col-4 gap">
          <div className="borders"><br/>
            <a href="http://silver-spoon-reviews.herokuapp.com" target="_blank"><img className="circles-gr" src={ssr}/></a>
            <hr className ="center"/>
            <h3 className="bold green">Silver Spoon Reviews</h3>
            <div className="inline-block soft">
              <p>aisnasfpmfaspo</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="borders">
            <a href="http://friendtrip-bt.herokuapp.com" target="_blank"><img className="ft" src={ft}/></a>
            <hr className="center"/>
            <h3 className="bold green">FriendTrip</h3>
            <div className="inline-block">
              <p className="soft">asdpomd spasomd apomsda pom</p>
            </div>
          </div>
        </div>
        <div className="col-4 gap">
          <div className="borders">
            <a href="http://ps-resume.herokuapp.com" target="_blank"><img className="pad-bot" src={pp}/></a>
            <hr className="center"/>
            <h3 className="green bold">my resume</h3>
            <div className="inline-block soft">
              <p> oinasfasoinsaf</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProjectsComponent
