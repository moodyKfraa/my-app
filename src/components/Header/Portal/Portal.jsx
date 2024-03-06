/* eslint-disable react/prop-types */
import { useState } from 'react'
import Styles from './styles.module.css'
import SignUp from '../../SignUp/SignUp'
import LogIn from '../../LogIn/LogIn'

function Portal({type,getUserEmail , closePortal}) {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const sendUserData =(e)=>{ 
    e.preventDefault()
    if(email && password){
      type === "sign up" ? SignUp(email,password,closePortal) : type === "log in" ? LogIn(email,password,getUserEmail,closePortal):null
    } 
  }
  return (
    <div className={Styles.overlay}>
      <div className={Styles.portal}>
        <span onClick={closePortal}>X</span>
        <form onSubmit={e=>sendUserData(e)}>
        <h1>{type}</h1>
          <input type="text" value={email} autoFocus onChange={(e)=> setEmail(e.target.value)} placeholder='E-mail'/>
          <input type={`${type=== "sign up" ? "text" : "password"}`} value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
          <input type="submit" value={type}/>
        </form>
      </div>
    </div>
  )
}

export default Portal