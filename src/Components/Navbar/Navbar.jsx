import React, { useContext } from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import ChatIcon from '@mui/icons-material/Chat';
import A1  from '../images/A1.jpg'
import Logo from '../images/Logo.jpg'
import { DarkModeContext } from '../../Context/DarkModeContext';


export const Navbar = () => {
    const {toggle, darkMode} = useContext(DarkModeContext);

  return (
    <div className='mainNavbaar'>
        <div className='logoContainer'>
            <img src={`${Logo}`} className='logo' alt=''/>
        </div>
        <div>
            <div className='searchInputContainer'>
                <SearchIcon className='iconSearch'/>
                <input type='text' name='' id='' placeholder='Search' className='searchInputNavbar'/>
                <div className='lightDarkMode'>
                    {darkMode ? <LightModeIcon className='sunIcon' onClick={toggle}/> : <DarkModeIcon className='MoonIcon' onClick={toggle}/>}
                </div>
            </div>
        </div> 
        <div className='iconsContainer'>
            <NotificationsActiveIcon className='NotificationIcon'/>
            <ChatIcon className='chatIcon'/>
            <div className='navbarRightContent' style={{display:'flex', alignItems:'center'}}>
                <img src={`${A1}`} className='profileImage' width="24px" alt=''/>
            </div>
        </div>
        
    </div>

  )
}

export default Navbar