import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light'); // state variable which tells whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); //Alert is an OBJECT
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#424242';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "secondary");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "primary");
    }
  }
  return (
    <>
      <Navbar title="Text Utils Application" about="About Us" mode={mode} toggleMode={toggleMode}/>
      {/* <Alert strong="Hello User," alert="Welcome to the Text Utility Application, I hope you have a good time here."/> */}
      <Alert alert={alert}/>
      <TextForm heading="Enter the text which has to be analysed" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      {/* <About /> */}
    </>
  );
}

export default App;
