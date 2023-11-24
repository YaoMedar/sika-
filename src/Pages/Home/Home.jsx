import React from 'react';
import "./home.scss";
import { SidebarLeft } from '../../Components/Sidebar/SideBarLeft/SidebarLeft';
import { SidebarRight } from '../../Components/Sidebar/SidebarRight/SidebarRight';
import { Feed } from '../../Components/Feed/Feed';

export default function Home() {
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
