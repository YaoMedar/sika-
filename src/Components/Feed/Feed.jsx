import React from 'react'
import './feed.scss'
import {Post} from './Posts/Post'
import MainPost from './Posts/MainPost'

export const Feed = () => {
  return (
    <div className='feed'>
        <Post/>
        <MainPost/>
    </div>
  )
}
