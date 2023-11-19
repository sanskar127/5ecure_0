import React from 'react'
import './stylesheet.css'
import SearchIcon from '../assets/search.svg'
import Notification from '../assets/notification.svg'
import User from '../assets/user.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">5e©ure_0?</div>
      <div className="search">
        <img src={SearchIcon} alt="search icon" className="searchIcon" />
        <input type="search" name="search" placeholder='Search' />
      </div>
      <div className="nav-actions">
        <button className="noti">
          <img src={Notification} alt="Notification Bell" />
        </button>
        <button className="user">
          <img src={User} alt="User Icon" />
          <h3>Username</h3>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
