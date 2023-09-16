import React, { useEffect, useState } from 'react'
import "./Nav.css"

import {useNavigate } from 'react-router-dom'
function Nav() {

    const [show,handleshow]=useState(false)
    const navigate=useNavigate()
    const transitionbar=()=>{
        if(window.scrollY > 100){
            handleshow(true)
        }
        else{
            handleshow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionbar);
        return()=>window.removeEventListener("scroll",transitionbar)

    },[]);

    
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_content'>
            <img onClick={()=>navigate("/")}className='nav_logo'
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
            <img onClick={()=>navigate("/profile")} className='nav_avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
        </div>
    </div>
  )
}

export default Nav