import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
import TextForm from './components/TextForm';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alrt, setAlrt] = useState(null)

  const showAlert = (title, msg) => {
    setAlrt({
      title: title,
      message: msg
    })
    setTimeout(() => {
      setAlrt(null)
    }, 1500)
  }
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("success", "Dark Mode Enabled")
      // setAlrt({
      //   title: "Success",
      //   message: "Dark Mode Enabled"
      // })
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("success", "Light Mode Enabled")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alerts alrt={alrt}/>
    <div className="container my-3">
    <Routes>
      <Route exact path='/about' element={<About showAlert={showAlert}/>}></Route>
      <Route exact path="/" element={<TextForm title="Write below : " showAlert={showAlert}/>}></Route>
    </Routes>
    
    </div>
    </Router>
    </>
  );
}

export default App;
