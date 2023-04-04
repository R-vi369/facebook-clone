 import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupIcon from '@mui/icons-material/Group';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Icon, IconButton, Avatar } from '@mui/material';

function Header() {
    return (
        <>
            <div className='header'>
                <div className='header__left'>

                    <img src='https://www.internetmatters.org/wp-content/uploads/2021/03/facebook-logo-new.png' />
                    <div className='search_icon'>
                        <SearchIcon />

                        <input type="text" placeholder="search facebook" />
                    </div>

                </div>
                <div className='header__mid'>
                    <div className='header__option  header__active'>

                        <HomeIcon fontSize='large' />
                    </div>
                    <div className='header__option'>

                        <OndemandVideoIcon fontSize='large' />
                    </div>
                    <div className='header__option'>


                        <GroupIcon fontSize='large' />
                    </div>
                    <div className='header__option'>


                        <SportsEsportsIcon fontSize='large' />
                    </div>

                </div>
                <div className='header__right'>
                    <div className='header__info'>


                        <Avatar alt="avatar dp" src="https://resources.stuff.co.nz/content/dam/images/1/8/z/s/4/8/image.related.StuffLandscapeThreeByTwo.1464x976.18zr6j.png/1451603839739.jpg" />
                        <h4>Pablo Escobar</h4>
                    </div>

                    <IconButton>
                        < AppsIcon />
                    </IconButton>
                    <IconButton>

                        < ForumIcon />
                    </IconButton>
                    <IconButton>


                        < NotificationsIcon />
                    </IconButton>
                    <IconButton>
                        < ArrowDropDownIcon />

                    </IconButton>





                </div>





            </div>



        </>
    )
}

export default Header