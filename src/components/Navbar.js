import React, {useState} from 'react' //rfce
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container"></div>
        <Link to="/" className="navbar-logo">
          TRVL <i className="fab fa-typo3" />
        </Link>
      </div>
    </>
  )
}

export default Navbar
