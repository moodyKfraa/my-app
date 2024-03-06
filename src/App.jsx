import { useCallback, useState } from "react"
import FetchData from "./components/FetchData"
import Header from "./components/Header/Header"
import AddNote from "./components/AddNote/AddNote"
import ItemBox from "./components/ItemsBox/ItemBox"
import EditData from "./components/EditData"

function App() {
  const token = JSON.parse(window.localStorage.getItem("sb-qsrvqzgxjkooytpjdevu-auth-token"));
  const [notes , setNotes] = useState()
  const [user , setUser] = useState(token ? token.user.email : null)
  const [state , setState] = useState(user ? true : false)
  const [fetch , setFetch] = useState(user ? true : false)
  
  const getData = useCallback((d)=>{
      if(JSON.stringify(notes) !== JSON.stringify(d)){
        setNotes(d);
      }
      setFetch(false)
    },[notes])
    
    if(fetch){FetchData(user ,getData)}

  const getUserEmail =(email)=>{
    setUser(email)
    setFetch(true)
  }
  const getState =(state)=>{
    setState(state)
  }


  async function update (type,payload){
    await EditData(user,notes,type,payload)
    setFetch(true)
  }

  return (
    <div>
      <Header getUserEmail={getUserEmail} getState={getState} AppState={state}/>
      {state ? <AddNote update={update}/> :null}
      {notes && state ? <ItemBox Data={notes} update={update}/> : null}
    </div>
  )
}

export default App