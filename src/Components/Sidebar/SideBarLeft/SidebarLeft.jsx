import React from 'react';
import './sidebarLeft.scss';
import { notifications, products } from '../../../data';

import { Toggle } from '../../add/Toggle';
export const SidebarLeft = () => {
  return (
    <div className='sidebarLeft'>
     
      <div className='ExploreBottomContainer'>
          <div className='ExploreContent'>
            <span>Explore</span>
            <span style={{ color: '#aaa' }}>See All</span>
          </div>
          <div className='exploreImgContainer'>
            <div className='exploreImgContent '>
             
              {products.map((product)=>(
                <div className='shopContent'>
                  <img src={product.productImg} className='exploreImage' alt=''/>
                  <span>{product.productName}</span>
                </div>
              ))}

            </div>
          </div>
      </div>
      
      <div className='notificationTopContainer'>
      <div className='notificationTop'>
        <h5>Notifications</h5>
        <span style={{ color: '#aaa' }}>See All</span>
      </div>
      <div className='notificationBottom'>

        {notifications.map((notification)=>(
          <div className='notificationContent'>
          <div className='notificationBottomLike'>
            <img src={notification.userImg} className='notificationImg' alt=''/>
            <p><span>{notification.clientName}</span>{notification.sugetDesc}</p>
          </div>
          <img src={notification.clientImg} className='followingUserImg' alt=''/>
        </div>
        ))}

      </div>
    </div>
      <Toggle className='totglePosition'/>
    </div>
  )
}
