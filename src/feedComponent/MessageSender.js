import React from 'react'
import './messageSender.css'
import { useState } from 'react';
import { Avatar, IconButton, Modal } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
// import CloseIcon from '@mui/icons-material/Close';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import VideoCallIcon from '@mui/icons-material/VideoCall';

const MessageSender = () => {
    const [open, setOpen] = useState(true)
    const HandleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <>
            {/* <Modal open={open} onClose={HandleClose} >
                <div className='model__top'>
                    <form>
                        <div className='model__heading'>
                            <h3>Create Post</h3>
                            <IconButton onClick={HandleClose}>
                                < CloseIcon />
                            </IconButton>
                        </div>
                        <div className='model__top'>
                            <Avatar />
                            <h5>Pablo</h5>

                        </div>

                        <div className='model__body'>
                            <textarea rows="5" placeholder='Whats on your mind Pablo ?' />
                        </div>
                         <div className='model__footer'>
                            <div className='modelFooter__left'>Add to your post
                            </div>
                            <div className='modelFooter__right'>
                                <IconButton>
                                    <AddPhotoAlternateIcon fontSize='large' style={{ color: 'lightgreen' }} />
                                </IconButton>
                                <IconButton>
                                    <VideoCallIcon fontSize='large' style={{ color: 'red' }} />
                                </IconButton>
                                <IconButton>
                                    <EmojiEmotionsIcon fontSize='large' style={{ color: 'yellow' }} />
                                </IconButton>
                            </div>

                        </div>

                        <input type='submit' className='post__submit' value='Post' /> 

                    </form>

                </div>
            </Modal> */}
            <div className='MessageSender'>
                <div className='message__top'>
                    <Avatar />
                    <form>
                        <input type="text" placeholder='Whats on your mind Ravi' onClick={handleOpen} />
                    </form>

                </div>

                <div className='message__buttom'>
                    <div className='messangerOption'>
                        <VideocamIcon style={{ color: 'red' }} fontSize='large' />
                        <p>Live Video</p>
                    </div>

                    <div className='messangerOption'>
                        <PhotoLibraryIcon style={{ color: 'lightgreen' }} fontSize='large' />
                        <p>Photos/Videos</p>
                    </div>

                    <div className='messangerOption'>
                        <EmojiEmotionsIcon style={{ color: 'yellow' }} fontSize='large' />
                        <p>Feelings/Activity</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MessageSender