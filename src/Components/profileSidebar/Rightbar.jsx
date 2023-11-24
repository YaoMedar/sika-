import React from 'react'
import './sidebar.scss'
//import A from '../images/A.jpg';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { clientRequests, friendsOptions } from '../../data'

export const Rightbar = () => {
  return (
    <div className='profileRight'>
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
        <h5 style={{ marginLeft: '10px', textAlign: 'start' }}>Friends and Clients Suggested for you</h5>
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
