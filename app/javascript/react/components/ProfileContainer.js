import React from 'react'
import image from '../../../assets/images/profilepic.png'

const ProfileContainer = (props) =>{
  return(
    <div className="profile-box">
      <img src={image}/>
    </div>
  )
}

export default ProfileContainer
