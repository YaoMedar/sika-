import React from 'react'
import './post.scss'
import A11 from '../../images/A11.jpg'

import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import Shop2OutlinedIcon from '@mui/icons-material/Shop2Outlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Post = () => {
  return (
    <div className='post'>
      <div className='uploadPostContainer'>
        <div className='uploadContent'>
          <img src={`${A11}`} className='profileImage' alt=''/>
          <textarea type='' className='postuploadAreaWrite' placeholder='Write your real thought...'/>
          <MoreVertIcon className='icon'/>
        </div>
        <div className='uploadiconsContainer'>
          <div className='uploadicons'>
            <Shop2OutlinedIcon/>
            <EmojiEmotionsOutlinedIcon/>     
            <PermMediaOutlinedIcon />
          </div>
          <div>
            <button className='postSendBontton'>Post</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Post
