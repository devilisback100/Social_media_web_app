import React from 'react'
import './Sign_Up.css'
function Sign_Up({ UpdateRenderCheck }) {
    return (
        <>
            <form >
                <div id='signUp_parent_container'>
                    <div id='signUp_parent_box'>
                        <div id='signUp_parent_text_1' className=' Text_1'>
                            SIGN UP
                        </div>
                        <div id='signUp_parent_box_2'>
                            <input type='text' id='Username' className='Sign_detail' placeholder='Username'></input>
                            <input type='email' id='Email' className='Sign_detail' placeholder='Email'></input>
                            <input type='password' id='Password' className='Sign_detail' placeholder='Password'></input>
                            <input type='password' id='Confirm_Password' className='Sign_detail' placeholder='Confirm Password'></input>
                        </div>
                        <div className='signUp_parent_box_3'>
                            <button type='button' id='Sign_Up_submit' onClick={() => { UpdateRenderCheck('Form1')}}>Create Account</button>
                        </div>
                    </div>


                </div>
            </form>

        </>
    )
}

export default Sign_Up
