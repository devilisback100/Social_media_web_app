import React from 'react'
import './Menu_page.css'
import { AiOutlineClose } from "react-icons/ai";

function Menu_page({ updateCheck, UpdateRenderCheck,Updated_Menu_color }) {
  return (
    <div className='Menu_page_parent_container' style={{ backgroundColor: Updated_Menu_color }}>

     <div className='Menu_page_child_container_1'>
        <AiOutlineClose className='Menu_page_icon' onClick={updateCheck}/>
     </div>
     <div className='Menu_page_child_container_2' >
        <div onClick={() => { UpdateRenderCheck('Form1') }} >Personal details </div>
      <div>Password and security</div>
      <div>Notifications</div>
      <div>Blocked Account</div>
      <div>Muted Account</div>
      <div>Help</div>
        <div style={{ color: '#E21A1A' }} onClick={() => { UpdateRenderCheck ('SignIn');}}>Log out</div>
     </div>
     
    </div>
  )
}

export default Menu_page
