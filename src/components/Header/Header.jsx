/* eslint-disable react/prop-types */
import styles from './styles.module.css'
import { useState } from 'react'
import Portal from './Portal/Portal'
import { createPortal } from 'react-dom'
import SignOut from '../SignOut/SignOut'

function Header({getUserEmail,getState,AppState}) {
  const root =document.getElementById('portal')
  const [show,setShow] = useState(false)
  const [type,setType] = useState("")
  const [state,setState] = useState(AppState ?true : false)
  const closePortal =()=>setShow(false)
  
  const handleSignUp = ()=>{
    setType("sign up")
    setShow(true)
  }
  const handleSignIn = ()=>{
    setType("log in")
    setShow(true)
  }

  const handleSignOut = ()=>{
    SignOut()
    setState(false)
    getState(false)
  }
  
  const logedIn = (userEmail)=>{
    getUserEmail(userEmail)
    setState(true);
    getState(true)
  }

  return (
    <div className={styles.header}>
      <h2>ModyKfraa</h2>
      <div className={styles.bts}>
     { !state ? 
      <><button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Log In</button></>

      :<button onClick={handleSignOut}>Log Out</button>
      }
      </div>
      {show ? createPortal(<Portal type={type} getUserEmail={logedIn} closePortal={closePortal}/>,root):null}
    </div>
  )
}

export default Header