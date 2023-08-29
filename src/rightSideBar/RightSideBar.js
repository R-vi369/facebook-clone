import React from 'react'
import './rightSideBar.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
const RightSideBar = () => {
  return (
    <div className='widget'>
      <div className='widget__header'>
        <div className='widget__headerLeft'>
          <h4>Your pages</h4>
        </div>
        <MoreHorizIcon />

      </div>


      <div className='widget__body'>
        <div className='widget__bodyOptions'>
          <Avatar src='https://i1.sndcdn.com/avatars-aMGtrgnjFj5oj5he-zxxpHw-t500x500.jpg' />
          <h4>catish than</h4>
        </div> <div className='widget__bodyOptions ml10'>
          <NotificationsIcon />
          <p>1 Notification </p>
        </div> <div className='widget__bodyOptions ml10'>
          < VolumeUpIcon />


          <p> Create Promotion</p>
        </div>

      </div>
      <hr /> <b />




      <div className='widget__header'>
        <div className='widget__headerLeft'>
          <h4>Contact</h4>
        </div>
        <div className='widget__headerRight'>

          <VideocamIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>


      </div>
      <div className='widget__body'>
        <div className='widget__bodyOptions'>
          <Avatar src='https://cdn.dribbble.com/userupload/3766827/file/original-6b32eed9a3dc21637330213a602ed223.png?resize=400x0' />
          <h4>duckoth</h4>
        </div> <div className='widget__bodyOptions'>
          <Avatar src='https://pbs.twimg.com/profile_images/578986343256064001/lxJkTZ0U_400x400.jpeg' />
          <h4>Micky Mouse</h4>
        </div> <div className='widget__bodyOptions'>
          <Avatar src='https://i.scdn.co/image/ab6761610000e5eb107c6afcc8a8852b5c55aaac' />
          <h4>Kamlesh singh</h4>
        </div> <div className='widget__bodyOptions'>
          <Avatar src='https://pyxis.nymag.com/v1/imgs/802/fcf/3b2a34ebe30a2f6279da0cc0eff2ce74cd-Bilal-Baig-Dream-Date-03.2x.rsocial.w600.jpg' />
          <h4>Surpnakha</h4>
        </div> <div className='widget__bodyOptions'>
          <Avatar src='https://www.okayafrica.com/media-library/image.jpg?id=17054081&width=980' />
          <h4>malala siri wastab</h4>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar