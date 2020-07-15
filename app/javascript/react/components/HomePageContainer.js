import React from 'react'
import ProfileContainer from './ProfileContainer'
import SampleBox from './SampleBox'
import image from '../../../assets/images/profilepic.png'

const HomePageContainer = (props) =>{
  return(
    <div>
      <div className="profile-box">
      <h2 className="title-1">About Me</h2>
      <img src={image}/>
      </div>
    </div>
  )
}

export default HomePageContainer
