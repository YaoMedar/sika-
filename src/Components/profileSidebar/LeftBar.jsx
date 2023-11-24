import React from 'react';
import './sidebar.scss';
import A1 from "../images/A1.jpg"
import { clientProducts } from '../../data';

export const Leftbar = () => {
  return (
    <div className='profilLeft'>
      <div className='leftContainer'>
        <div className='leftContainerTop'>
          <img src={`${A1}`} className='coverImg' alt='' />
          <div className='leftContainerTopContent'>
            <img src={`${A1}`} className='profileUserImg' alt='' />
            <div className='profileInfo'>
              <span className='profileUsername'>Mna</span>
              <span className='profileDesc'>software Developper</span>
            </div>

          </div>
          <div className='profileView'>
            <span>Profile view</span>
            <p>12m</p>
          </div>
          <hr className='hrProfile'/>
          <div className='friends'>
            <span className='friendspan'>Friends</span>
            <p>123k</p>
          </div>
          <hr className='hrProfile'/>
          <div className='userInfo'>
            <span>User bio</span>
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
          <button className='bouton'>Edit Bio</button>
        </div>
      </div>



      <div className='leftprofileBottom'>
        <div className='leftprofileBottomTop'>
          <h4>My Shop</h4>
        </div>
        <div className='leftprofileBottomBottom'>
          <div className='friends'>
            <span className='seefriends'>Aticles</span>
            <span  className='seefriends'>Clients</span>
          </div>

          <div className='friendImgContainer'>
          <div className='friendImg'>

            {clientProducts.map((clientProduct)=>(
              <div className='friendImgContent'>
              <img src={clientProduct.productImg} alt='' className='friendImg' />
              <span>{clientProduct.productName}</span>
            </div>
           
            ))}
            
          
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
