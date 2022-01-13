
// rfc -------react function based component
import React from 'react'                   //no useState is used here

//impt----------imporing proptype---also not mandatory
import PropTypes from 'prop-types';
import { a } from 'react-router-dom';




// creating props --props are like variable which are assigned in App.js---syntax= props.<variable>
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mb-4`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-a active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="/">{props.about_text}</a>
        </li>
        
      </ul>
    </div>
      {/* dark mode switch imported from bootstrap//               ternary operator used here to change the text color vice versa with navbar mode               */ }
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Switch to Dark mode</label>
      </div>
  </div>
  </nav>
    )
}


// creating proptype       //pts---------PropType---------------not mandatory
Navbar.propTypes = {title:PropTypes.string.isRequired, 
                   about_text:PropTypes.string}


// setting default props 
Navbar.defaultProps = {
    title: "Set title here",
    about_text:"About"
}