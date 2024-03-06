import { useCallback, useState, useEffect } from "react";
import FetchData from "./components/FetchData";
import Header from "./components/Header/Header";
import AddNote from "./components/AddNote/AddNote";
import ItemBox from "./components/ItemsBox/ItemBox";
import EditData from "./components/EditData";

function App() {
  const [notes, setNotes] = useState(null);
  const [user, setUser] = useState(null);
  const [state, setState] = useState(false);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("sb-qsrvqzgxjkooytpjdevu-auth-token"));
    if (token) {
      setUser(token.user.email);
      setState(true);
      setFetchData(true);
    }
  }, []);

  const getData = useCallback((data) => {
    if (JSON.stringify(notes) !== JSON.stringify(data)) {
      setNotes(data);
    }
    setFetchData(false);
  }, [notes]);

  if (fetchData) {
    FetchData(user, getData);
  }

  const getUserEmail = (email) => {
    setUser(email);
    setFetchData(true);
  };

  const handleStateChange = (newState) => {
    setState(newState);
  };

  const updateNote = async (type, payload) => {
    await EditData(user, notes, type, payload);
    setFetchData(true);
  };

  return (
    <div>
      <Header getUserEmail={getUserEmail} handleStateChange={handleStateChange} appState={state} />
      {state && <AddNote update={updateNote} />}
      {notes && state && <ItemBox data={notes} update={updateNote} />}
    </div>
  );
}

export default App;