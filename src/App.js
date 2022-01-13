// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';    //importing navbar from components 
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

// Settin up react router
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";


function App() {

  // all the props and state need to be created outside the return() but inside the function
  
  const [mode, setMode]= useState('light'); //weather dark mode is enabled or not---default value inside paran()
  
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "primary");
    }
  };
  
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message, 
      type:type
    })
    // to remove our alert after 2 seconds
    setTimeout(showAlert, 2000);

  }

  return (
    <>
  {/* <Navbar title="WingsTechnology" about_text="About-Us"  />   */}
                                                 {/* in bootstrap . container class is center aligned */}
{/*   
  <Router> */}

  <Navbar title="WingsTechnology" mode={mode}  toggleMode={toggleMode}  /> 

  <Alert alert={alert}/>

  <div className="container my-3">
  {/* <Routes> */}

        {/* <Route path="/about">
          <About/>
        </Route> */}
       <TextForm heading="This is the coustom heading" mode={mode} showAlert={showAlert}/>
        
  {/* </Routes> */}
  </div>
  {/* </Router>      */}

  </>
  );
}


export default App;


// 









// NOTES by ashu  :
// npm start --------------------to start your react app
//npm run build ------------------to build for production 
// jsx is similar to html but with slight variations //like---ClasName here is similar to the class in html
                                                 // for in html == htmlFor in jsx
// jsx is the code written inside  function App() 