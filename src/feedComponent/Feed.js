import React from 'react'
import './feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = () => {
  return (
    <>
    <div className='feed'>

        <StoryReel/>
         <MessageSender/>
         <Post  PhotoURL='' image='' username='Pablo' timestamp='12:22 PM' message='this is a message' />
         <Post  PhotoURL='https://glamsham.com/wp-content/uploads/2021/03/0b97700c0b39abcb6563752efead7817.jpg' image='https://iskconvrindavan.com/images/services/krsna.jpg' username='dummy' timestamp='2:42 PM' message='this is dummy text' />
        
    </div>
    </>
  )
}

export default Feed