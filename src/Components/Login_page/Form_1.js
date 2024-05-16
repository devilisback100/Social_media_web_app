import React from 'react'
import './Form_1.css'
import Image1 from '../Images_Icons/Screenshot 2024-03-14 230348.png'
const Form = ({ UpdateRenderCheck }) => {
  return (
    <>
      <div className='parent'>
        <div className='parent_container'>
          <div className='child_container_1'>
            <p className='Text_1'>Personal Details
            </p>
          </div>
          <div className='child_container_2'>
            <img alt='progress_image' src={Image1} />
          </div>
          <div className='child_container_3 Form_Text'>
            <div className='child_box_1'>
              <label>Name</label>
              <label>Surname</label>
            </div>
            <div className='child_box_2'>
              <input type='text' placeholder='Name' className='input_design'></input>
              <input type='text' placeholder='Surname' className='input_design'></input>
            </div>
          </div>
          <div className='child_container_4 Form_Text'>
            <label>Username</label>
            <input type='text' placeholder='Username' className='input_design'></input>
          </div>
          <div className='child_container_5 Form_Text'>
            <label>Gender</label>
            <select className='input_design'>
              <option >Male</option>
              <option >Female</option>
              <option >Other</option>
            </select>
          </div>
          <div className='child_container_6 Form_Text'>
            <label>Email</label>
            <input type='email' placeholder='Email' className='input_design'></input>
          </div>
          <div className='child_container_7 Form_Text'>
            <label>Date of birth</label>
            <input type='date' placeholder='Date of Birth' className='input_design'></input>
          </div>
          <div className='child_container_8 '>
            <button type='submit' className='Next_Form_button' onClick={() => { UpdateRenderCheck ('Form2')}} >Next</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Form
