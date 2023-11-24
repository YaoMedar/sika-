import React from 'react'
import './sidebarRight.scss'
// import A6 from '../../images/A6.jpg'
// import A4 from '../../images/A4.jpg'
// import A11 from '../../images/A11.jpg'
// import A8 from '../../images/A8.jpg'
// import A9 from '../../images/A9.jpg'
// import A1 from '../../images/A1.jpg'
// import A5 from '../../images/A5.jpg'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { activites, onlines, sugestions } from '../../../data'

export const SidebarRight = () => {
  return (
    <div className='sidebarRight'>
      <div className='rightbarContainerMiddle'>
      <h6 style={{marginLeft:'10px',textAlign:'start'}}>Online friends</h6>
      {onlines.map((online)=>(
        <div className='onlineFriendContainer'>
          <img src={online.userImg} className='onlineFriendImage' alt='' />
          <span className='onlineButton'></span>
          <div className='mddleOnline'>
            <span >{online.userName}</span>
            <span style={{ fontSize: '12px' }}>{online.desc}</span>
          </div>
        </div>
      ))}

      </div>

      <div className='rightbarContainerTop'>
      <h6 style={{marginLeft:'10px',textAlign:'start'}}>CodeDemy</h6>
      {sugestions.map((sugestion)=>( 
      <div className='adsContainer'>
        <img src={sugestion.userSugestImg} className='adsImage' alt='' />
        <div className='codeContainer'>
          <span >{sugestion.title}</span>
          <span style={{ fontSize: '12px' }}>{sugestion.desc}</span>
        </div>
      </div>

      ))}
    </div>
      <div className='rightbarContainerBottom'>
        <h6 style={{marginLeft:'10px',textAlign:'start'}}>Sugestion for you</h6>
        <div className='rightbarProfileContenaire'>
          
        {activites.map((activity)=>(
          
          <div className='rightbarProfileContenaireTop'>
            <div className='rightbarProfileContent'>
              <img src={activity.userImg} className='profileImge' alt='' />
              <div className='rigtbarProfil'>
                <span>{activity.nickname}</span>
                <p style={{fontSize:'12px', color:'#aaa'}}>{activity.desc}</p>
              </div>
            </div>
            <div className='addfriendContainer'>
              <PersonAddAltOutlinedIcon className='addfriend'/>
            </div>
          </div>
        ))}

        </div>
      </div>
    </div>
  )
}
