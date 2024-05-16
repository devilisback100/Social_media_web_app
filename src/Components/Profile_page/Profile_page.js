import React, { useState } from 'react'
import './Profile_page.css'
import image1 from '../Images_Icons/Social_media_image_4.jpg'
import image2 from '../Images_Icons/img111.jpg'
import image3 from '../Images_Icons/image222.jpg'
import image4 from '../Images_Icons/image333.jpg'
import image5 from '../Images_Icons/image444.webp'
import { AiOutlineMenu, AiOutlineHome, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { MenuPage } from '../Component_list'
export const IconRender = ({UpdateRenderCheck,Updated_IconColor,Updated_IconBG_color}) => {
    return (
        <>
            <div className='Profile_parent_container_fixed_3' style={{backgroundColor:Updated_IconBG_color}}>
                <ul style={{ color: Updated_IconColor}}>
                    <li onClick={() => { UpdateRenderCheck('Feed') }}>
                        <AiOutlineHome />
                    </li>
                    <li>
                        <AiOutlineSearch />
                    </li>
                    <li>
                        <FaPlus />
                    </li>
                    <li onClick={() => { UpdateRenderCheck('profile') }}>
                        <AiOutlineUser />
                    </li>
                </ul>
            </div>
        </>
    )
}
const Profile_page = ({ UpdateRenderCheck }) => {
    const [check, setCheck] = useState(true)

    function updateCheck() {
        setCheck(!check);
    }
 
    return (
        <>

            <div style={{ position: "absolute" }}> {!check && (<MenuPage updateCheck={updateCheck} UpdateRenderCheck={UpdateRenderCheck}/>)}</div>
            <div className='Profile_parent'>
                {check && (<span className='Profile_parent_container_fixed_1' onClick={updateCheck}>
                    <AiOutlineMenu />
                </span>)}

                <div className='Profile_parent_container_fixed_2'>
                    <img alt='Profile_image' src={image1} />
                </div>
                <div className='Profile_parent_container'>
                    <div className='Profile_parent_container_1'></div>
                    <div className='Profile_parent_container_2'>
                        <p className='Text_1 Profile_Bio'>
                            Sam is Here                            </p>
                    </div>
                    <div className='Profile_parent_container_3'>
                        <div className='Profile_child_container_3_1'>
                            <p className=' Text_1 Profile_Name'>Vicky Kaushal</p>
                            <p className=' Text_1 Profile_Username'>vickykaushal09</p>
                        </div>
                    </div>
                    <div className='Profile_parent_container_4'>
                        <button className='Profile_Message Text_1'>Message</button>

                        <button className='Profile_Follow Text_1' >Follow</button>

                    </div>
                    <div className='Profile_parent_container_5'>
                        <div className='Profile_followers'>
                            <span>130K</span>
                            <span>Followers</span>
                        </div>
                        <div className='Profile_following'>
                            <span>153</span>
                            <span>Following</span>
                        </div>
                        <div className='Profile_posts'>
                            <span>73</span>
                            <span>Posts</span>
                        </div>

                    </div>
                    <div className='Profile_parent_container_6'>
                        <span className='Text_1 Profile_parent_container_6_Post_Text'>Posts</span>
                        <div className='Profile_child_container_6_1'>
                            <div className='Profile_child_container_6_1_1'>
                                <div className='Profile_post'>  <img alt='Post' src={image2} /></div>
                                <div className='Profile_post'><img alt='Post' src={image3} /></div>
                                <div className='Profile_post'> <img alt='Post' src={image4} /></div>
                                <div className='Profile_post'><img alt='Post' src={image5} /></div>
                                <div className='Profile_post'>  <img alt='Post' src={image2} /></div>
                                <div className='Profile_post'><img alt='Post' src={image3} /></div>
                                <div className='Profile_post'> <img alt='Post' src={image4} /></div>
                                <div className='Profile_post'><img alt='Post' src={image5} /></div>
                            </div>

                        </div>
                    </div>
                </div>
        <IconRender UpdateRenderCheck={UpdateRenderCheck}/>
            </div>
        </>
    )
}

export default Profile_page 
