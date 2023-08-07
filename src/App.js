 
import './App.css';
import { useState } from 'react';
import Login from './Component/Login';
import Profile from './Component/Profile';
import { ContextLogin } from './Context/ContextLogin';

function App() {
  const [username, setUsername]=useState("")
  const [email, setEmail]=useState("")
  const [showProfile, setShowProfile]= useState(false)

  return (
    <div className="">

<ContextLogin .Provider value={{username, setUsername, email, setEmail,  setShowProfile}}>
    {showProfile ? <Profile/> : <Login/>}
    </ContextLogin .Provider>
    </div>
  );
}

export default App;
