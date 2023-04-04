import React from 'react'
import './post.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
const Post = () => {
    return (
        <div className='post'>
            <div className='post__top'>
                <div className='post__left'>
                    <Avatar />
                    <div className=''></div>
                </div>
                <MoreHorizIcon />
            </div>




            <div className='post__middle'></div>
            <div className='post__buttom'></div>


        </div>
    )
}

export default Post