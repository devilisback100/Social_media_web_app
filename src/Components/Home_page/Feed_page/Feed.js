import React,{useState} from 'react'
import './Feed.css'
import FeedItem from './FeedItem'
import { MenuPage } from '../../Component_list'
import { AiOutlineMenu} from "react-icons/ai";
import {IconRender} from '../../Profile_page/Profile_page';
function Feed({ UpdateRenderCheck }) {
  const [check, setCheck] = useState(true)

  function updateCheck() {
    setCheck(!check);
  }
  return (

    <div className='Feed_parent_container'>
      <div style={{ position: "fixed" }}> {!check && (<MenuPage updateCheck={updateCheck} UpdateRenderCheck={UpdateRenderCheck} Updated_Menu_color={'rgba(255, 255, 255, 0.868)'} />)}</div>
      {check && (<span className='Profile_parent_container_fixed_1' onClick={updateCheck} style={{marginTop:"-1rem"}}>
        <AiOutlineMenu />
      </span>)}
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <IconRender Updated_IconColor={'purple'} Updated_IconBG_color={'#e9ecef'} UpdateRenderCheck={UpdateRenderCheck}/>
    </div>
  )
}

export default Feed
