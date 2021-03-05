import "./App.css";
import Signup from "./components/Signup";
import { useState } from "react";


function App() {
  const [signup,setSignup] = useState(false); 
  return (
    <div className="app">
      {signup && <Signup />}
      <a onClick={()=>{setSignup(!signup)}}>Signup</a>
    </div>
   );
 }

export default App;
