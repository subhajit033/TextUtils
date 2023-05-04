import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textcomp from "./components/Textcomp";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState(false);
  const[alert, setAlert] = useState(null);
  const toggleMode = () => {    
    setMode(mode? false: true);
  }
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
  }
  return (
    <>
      <Navbar title="TextUtils" price="Pricing" toogglemode={toggleMode} mode={mode}/>
      <Alert alert = {alert} setAlert = {setAlert}/>
      <Textcomp title="Analyze your text" placeholder="Write here or Paste here to analyze your text" showalert = {showAlert}  />
    </>
  );
}

export default App;
