import React,{useState} from 'react'
import './Sign_In.css'
import checkbox_1 from '../Images_Icons/Social_media_circle_1.png'
import checkbox_2 from '../Images_Icons/Social_media_circle_2.png'
export default function Sign_In({ UpdateRenderCheck }) {
  const [check, setCheck] = useState(true)

  function updateCheck() {
    setCheck(!check);
  }
  return (
    
    <>
    <form>
    <div id='Parent_SignIn_container'>
          <div id='Parent_SignIn_box' className='Text_1'>

            <div id='Child_SignIn_box1' className='Text_1' >
        Login
      </div>
            <div id='Child_SignIn_box2' className='Text_1'>
              <input type='text' id='Username' placeholder='Username' className='Sign_detail'></input>
                <input type='password' id='Password' className='Sign_detail' placeholder='Password'></input>
      </div>
            <div id='Child_SignIn_box3' className='Text_1'>
              {check && (
                <img alt='checkbox' src={checkbox_1} className='checkbox_1' onClick={updateCheck} />
              )}
              
              {!check && (
                <img alt='checkbox' src={checkbox_2} className='checkbox_1' onClick={updateCheck} />
              )}
              
              <div>Remember me</div>
      </div>
            <div id='Child_SignIn_box4' className='Text_1'>
              <button id='Sign_In_submit' type='button' onClick={() => { UpdateRenderCheck('profile') }}>
                Login
              </button>
      </div>
            <div id='Child_SignIn_box5' className='Text_1'>
              <p>Forgot Username</p>
              <p style={{color:"purple"}}>|</p>
              <p>Password</p>
              <p style={{ color: "purple" }}>|</p>
              <p onClick={() => { UpdateRenderCheck('SignUp') }}>Sign Up</p>
        
      </div>
      </div>

    </div>
      </form>
    </>
  )
}
