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
          </div>
        </div>
        <div className="col-6">
          <div className="borders"><br/>
            <img className="circles" src={launchlogo}/>
            <h3 className="bold"><br/>Launch Academy - Full Stack Development Boot Camp</h3>
            <hr className="center"/>
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationComponent
