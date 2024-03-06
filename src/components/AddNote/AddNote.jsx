/* eslint-disable react/prop-types */
import { useState } from "react"
import Styles from "./Styles.module.css"

function AddNote({update}) {

 const [note , setNote] = useState("")

  async function addNote (e){ 
    e.preventDefault()
    if(note){
        update("add" , note)
    }
    setNote("")
  }

  return (
    <div className={Styles.add_note}>
      <button className={Styles.delete_all} onClick={()=>update("deleteAll")}>X</button>
        <form onSubmit={e=>addNote(e)} id="form">
          <textarea value={note} required id="form" onChange={(e)=> setNote(e.target.value)} placeholder='Add Note'/>
          <input type="submit" value="+"/>
        </form>
      </div>
  )
}

export default AddNote