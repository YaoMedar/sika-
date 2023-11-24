import React, { useState } from 'react';
import './profile.scss'
import { Leftbar } from '../../Components/profileSidebar/LeftBar'
import {Feed} from '../../Components/Feed/Feed'
import { Rightbar } from '../../Components/profileSidebar/Rightbar'
//import ProfileCover from '../../Components/Feed/profileCover/ProfileCover'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {sliderItems} from "../../data";
import styled from "styled-components";


import "../Home/home.scss";
import { SidebarLeft } from './Sidebar/SideBarLeft/SidebarLeft';
import { SidebarRight } from './Sidebar/SidebarRight/SidebarRight';
//import { Feed } from '../../Components/Feed/Feed';


const Profile = () => {


  return (
    <div className='home'>
    <div className='homeComponentContainer'>
      <SidebarLeft/>
      <Feed/>
      <SidebarRight/>
    </div>
  </div>
  )
}


export default Profile
