import React, { useState } from 'react'
import './mainPost.scss'; 
import A5 from '../../images/A5.jpg';
import A9 from '../../images/A9.jpg';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import {posts} from "../../../data";


export const MainPost = () => {
    
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [Like, setLike] = useState(ThumbUpOutlinedIcon);
    const [count, setCount] = useState(100);
    const [Comments, setComments] = useState([]);
    const [Commentwriting, setCommentwriting] = useState()
    const [show,setShow] = useState(false);

    const handleLike = () =>{
        if(Like === ThumbUpOutlinedIcon){
            setLike(ThumbUpAltIcon);
            setCount(count +1);
        }else{
            setLike(ThumbUpOutlinedIcon);
            setCount(count -1)
        }
    }

    const handleShow = ()=>{
        if(show === false){
            setShow(true);
        }else{
            setShow(false);
        }
    }
    const addComment = ()=>{
        const comment = {
            "id":"2f3d7r8s5d5z6e34s7ez",
            "username": "Yao Medar",
            "desc": `${Commentwriting}`
        }
        setComments(Comments.concat(comment))
    }

    const handleComment = ()=>{
        addComment();
    }

    console.log(Comments)
  return (  
    <div className='mainPost'>
      <div className='subPostContainer'>
        {posts.map((post)=>(

            
            <div className='subPostCard'>
                
                    <div className='subPostCardContent'>
                        <img src={post.img} className='profileImage' alt=''/>
                        <span>{post.userName}</span>
                    </div>
                    <div className='timeAndFolowBy'>
                        <span className='postTime'>{post.time}</span>
                        <span className='following'>Following by {post.followed}</span>
                    </div>
                    <div className='postContent'>
                        <p>{post.desc}</p>
                        <img src={post.postImg} className='postImage' alt=''/>
                    </div>
                    <div className='ComentLikeCardContainer'>
                        <div className='ComentLikeCard'>
                            <div className='LikeCardContent'>
                                <Like className='icon' onClick={handleLike}/>
                                <span>{count}k like</span>
                            </div>
                            <div className='ComentCardContent'>
                                <MarkUnreadChatAltOutlinedIcon className='icon' onClick={handleShow}/>
                                <span>100 comments</span>
                            </div>
                        </div>
                        <div className='ShareCardContent'>
                            <ShareIcon className='icon' />
                            <span>100 shared</span>
                        </div>
                    </div>
                {show ===  true ?
            
                <div>
                <div className='addCommentsContainer'>
                <div className='comment'>
                    <img src={`${A9}`} alt=''/>
                    <textarea type='text' placeholder='write  your comment here...' onChange={(e)=>(setCommentwriting(e.target.value))} />
                    
                </div>
                <div className='addComments'>
                    <button onClick={handleComment}>Posted</button>
                </div>
                
                </div>
                <div className='commentUserContainer'>
                {Comments.map((item)=>(
                    <div>
                        <div className='commentUser'>
                            <div className='commentcontentsTop'>
                                <img src={`${A5}`} className='commentUserIgm' alt='' />
                                <span>{item.username}</span>
                            </div>
                            <div className='commentcontentBottom'>
                                <p>{item.desc}</p>
                                <p className='replay'>Replay</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                </div>: ''
            }
            </div>

  ))}




      </div>
      
    </div>
  )
}

export default MainPost

