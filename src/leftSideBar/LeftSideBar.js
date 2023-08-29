import React from 'react'
import "./leftSideBar.scss";
import SideBarOption from './SideBarOption';


import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CelebrationIcon from '@mui/icons-material/Celebration';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LeftSideBar = () => {
  return (
    <>

      <div className='left__icons'>

        <SideBarOption title="Pablo escobar" />
        <SideBarOption title="Covid 19 information center" />
        <SideBarOption Icon={PeopleAltIcon} title="Friends" />
        <SideBarOption Icon={Diversity3Icon} title="Groups" />
        <SideBarOption Icon={OndemandVideoIcon} title="Watch" />
        <SideBarOption Icon={CelebrationIcon} title="Events" />
        <SideBarOption Icon={KeyboardArrowDownIcon} title="See more" />


      </div>


    </>
  )
}

export default LeftSideBar