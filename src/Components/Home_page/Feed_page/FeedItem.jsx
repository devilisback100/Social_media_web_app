import React from 'react'
import './Feed.css'
import { AiOutlineMore, AiOutlineMessage, AiOutlineShareAlt, AiOutlineDownload } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

import image1 from '../../Images_Icons/Social_media_image_4.jpg'
import image2 from '../../Images_Icons/image444.webp'

function FeedItem() {



    return (
        <>
            <div className='FeedItem_parent_container' >            
            <div className='FeedItem_parent_1'>
                <div className='FeedItem_parent_1_child_1'>
                    <div className='FeedItem_parent_1_child_1_1'>
                        <img src={image1} alt='profile_image' />
                        <div style={{height:'max-content'}}>vickykaushal09</div>
                    </div>
                    <div className='FeedItem_parent_1_child_1_2'>
                        <div>January 10 at 10:15 AM</div>
                    </div>
                </div>
                <div className='FeedItem_parent_1_child_2'>
                    <AiOutlineMore className='feed_Icon'style={{width:'150%'}} />
                </div>
            </div>
                <div className='FeedItem_parent_2'>
                    <img src={image2} alt='post' />
                </div>
                <div className='FeedItem_parent_3'>

                    <div className='FeedItem_parent_3_child_1'>
                        <FaHeart className='feed_Icon' style={{color:'red'}} />
                        <AiOutlineMessage className='feed_Icon' />
                        <AiOutlineShareAlt className='feed_Icon' />
                    </div>
                    <div className='FeedItem_parent_3_child_2 '>
                        <AiOutlineDownload className='feed_Icon'  />
                    </div>

                </div>
            </div>
        </>

    )
}

export default FeedItem
