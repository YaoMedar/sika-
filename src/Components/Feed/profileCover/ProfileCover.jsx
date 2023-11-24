import React from 'react'
import './profilecover.scss'
import A1 from '../../images/A1.jpg'
import SliderProfileCover from './SliderProfileCover'
export const ProfileCover = () => {
  return (
    <div className='profileCover'>
        <div className="ProfileCoverImage">
          <SliderProfileCover/>
        </div>
        <div className='profileImgContent'>
          <img src={`${A1}`} className='profileImg' alt=''/>
          <span className='profileImgName'>Yao Medar</span>
        </div>
    </div>
  )
}

export default ProfileCover
