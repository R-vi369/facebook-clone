
import React from 'react'
import "./leftSideBar.scss";
const SideBarOption = ({ src, Icon, title }) => {
  return (
    <>
      <div className='sideBarRow'>
        {Icon && <Icon />}
        <p>{title}</p>
       
      </div>





    </>
  )
}

export default SideBarOption