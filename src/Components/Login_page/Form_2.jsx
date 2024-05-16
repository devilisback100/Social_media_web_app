import React from 'react'
import './Form_2.css'
import Image2 from '../Images_Icons/Screenshot 2024-03-14 230630.png'
import Image3 from '../Images_Icons/Social_media_image_4.jpg'
const Form_2 = ({ UpdateRenderCheck }) => {
    return (
        <>
            <div className='form2_parent'>
                <div className='form2_parent_container'>
                    <div className='form2_child_container_1 Text_1'>
                        <p>Personal Details</p>
                    </div>
                    <div className='form2_child_container_2'>
                        <img alt='progress_image' src={Image2} />
                    </div>
                    <div className='form2_child_container_3'>
                        <img className='Profile_Image' alt='profile' src={Image3} />
                    </div>
                    <div className='form2_child_container_4'>
                        <label className='Form_Text_2 Text_1'>About you</label>
                        <textarea placeholder='About you' className='Form_Text_2 Text_1'></textarea>
                    </div>
                    <div className='form2_child_container_5'>
                        <label className='Form_Text_2 Text_1'>Country</label>
                        <input type='text' className='form_2_input_design' placeholder='Country'></input>
                    </div>
                    <div className='form2_child_container_6'>
                        <label className='Form_Text_2 Text_1'>State</label>
                        <input type='text' className='form_2_input_design' placeholder='State'></input>
                    </div>
                    <div className='form2_child_container_7'>
                        <label className='Form_Text_2 Text_1'>City</label>
                        <input type='text' className='form_2_input_design' placeholder='City'></input>
                    </div>
                    <div className='form2_child_container_8'>
                        <button type='submit' className='Next_Form_2_button' onClick={() => { UpdateRenderCheck ('profile')}} >Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form_2
