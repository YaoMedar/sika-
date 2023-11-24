import React from 'react'
import './sidebarRight.scss'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { activites, onlines, sugestions } from '../../../../data';
import { clientRequests, friendsOptions } from '../../../../data'

export const SidebarRight = () => {
  return (
    <div className='sidebarRight'>
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

    <div className='rightbarContainerTop'>
      <div className='adsContainer'>
        <h5>Clients request</h5>
        
        {clientRequests.map((clientRequest)=>(
          <div className='friendAdd'>
            <div className='friendInfo'>
              <img src={clientRequest.img} alt='' className='imageFriend' />
              <p>{clientRequest.desc}</p>
            </div>
            <div className='twoButton'>
              <button>Accept</button>
              <button>Refuse</button>
            </div>
        </div>
        ))}
      
      </div>
  </div>


     
    <div className='rightbarContainerBottom'>
    <h5>Friends and Clients Suggested</h5>
    <div className='rightbarProfileContenaire'>

     {friendsOptions.map((friendsOption)=>(
      <div className='rightbarProfileContenaireTop'>
      <div className='rightbarProfileContent'>
        <img src={friendsOption.img} className='profileImge' alt='' />
        <div className='rigtbarProfil'>
        <h6>{friendsOption.name}</h6>
        <span >{friendsOption.desc}</span>
        </div>
      </div>
      <div className='addfriendContainer'>
        <PersonAddAltOutlinedIcon className='addfriend' />
      </div>
    </div>

  
     ))}
     
    </div>
  </div>
    </div>
  )
}
