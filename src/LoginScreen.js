import React, { useState } from 'react'
import "./LoginScreen.css"
import SignInScreen from './SignInScreen';
function LoginScreen() {
    const [signIn,setSignin]=useState(false);

  return (
    <div className='LoginScreen'>
        <div className='LoginScreen_background'>
            <img 
                className='LoginScreen_logo'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                alt=''
            />
            <button onClick={()=>setSignin(true)}
            className='signin_button'>

                Sign In
            </button>
            <div className='LoginScreen_gradient'/>
            <div className='LoginScreen_body'>
            {signIn ? (
                <SignInScreen />
                ) : (
                    <div>
                        <h1>Unlimited films, TV programs, and more.</h1>
                        <h2>Watch Anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='LoginScreen_input'>
                        <form>
                            <input type='email' placeholder='Email Address' />
                            <button onClick={() => setSignin(true)} className='LoginScreen_getstarted'>
                            GET STARTED
                            </button>
                        </form>
                        </div>
                    </div>
                    )}

                
            </div>

        </div>
    </div>
  )
}

export default LoginScreen