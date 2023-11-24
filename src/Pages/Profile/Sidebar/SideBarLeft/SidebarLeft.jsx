import React from 'react';
import './sidebarLeft.scss';
import '../../profile.scss'
import { notifications, products, } from '../../../../data';
import A1 from "../../../../Components/images/A1.jpg"
import {clientProducts} from "../../../../data"
import { Toggle } from '../../../../Components/add/Toggle.jsx'
export const SidebarLeft = () => {
  return (
    <div className='sidebarLeft'>
     
    <div className='leftContainer'>
      <img src={`${A1}`} className='coverImg' width={64} alt='' />
      <div className='leftContainerTopContent'>
        <div className='profileInfo'>
            <img src={`${A1}`} className='profileUserImg' width={100} alt='' />
            <span className='profileUsername'>Mna</span>
        </div>
        <span className='profileDesc'>software Developper</span>
      </div>
      <div className='profileView'>
        <span>Profile view</span>
        <span>:</span>
        <p>12mn</p>
      </div>
      <hr className='hrProfile'/>
      <div className='friendsfollwers'>
        <span className='friends'>Friends <p>123k</p></span>
        <span className='follwers'>Followers  <p>1200k</p></span>
       
      </div>
      <hr className='hrProfile'/>
      <div className='userInfo'>
        <span>User biography</span>
        <p className='userBioDesc'>
          See the documentation below for a
          complete reference to all of the props and
          classes available to the components mentioned here...
          See the documentation below for a
          complete reference to all of the props and
          classes available to the components mentioned here...
          See the documentation below for a
          complete reference to all of the props and
          classes available to the components mentioned here...
          See the documentation below for a
          complete reference to all of the props and
          classes available to the components mentioned here...
        </p>
      </div>
      <button className='boutonBio'>Edit biography</button>
  </div>
      
  <div className='leftprofileBottom'>
    <h4>My Shop</h4>

  <div className='leftprofileBottomBottom'>
    <div className='friends'>
      <span className='seefriends'>Aticles</span>
      <span  className='seefriends'>Clients</span>
    </div>

    <div className='friendImgContainer'>

      {clientProducts.map((clientProduct)=>(
        <div className='card'>
          <img src={clientProduct.productImg} alt='' className='friendImg' />
          <span>{clientProduct.productName}</span>
      </div>
     
      ))}
      
    
    </div>
  </div>
</div>
      <Toggle className='totglePosition'/>
    </div>
  )
}
