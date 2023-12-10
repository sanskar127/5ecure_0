import React, { useEffect, useState } from 'react'
import './stylesheet.css'
import SearchIcon from '../assets/search.svg'
import Notification from '../assets/notification.svg'
import User from '../assets/user.svg'
import { Link } from 'react-router-dom'

const UserItems = [
  {
    "name": "Edit Profile",
    "action": "/editprofile"
  },
  {
    "name": "Configuration",
    "action": "/settings"
  },
  {
    "name": "Logout",
    "action": "/"
  }
]

const Notifications = [
  {
    "name": "Update your Steam Password",
    "action": "/steamactions"
  },
  {
    "name": "EA Account is Vulnerable",
    "action": "/eaactions"
  },
  {
    "name": "You haven't visited me",
    "action": "/twitchactions"
  }
]

const NavExpand = ({ children }) => {
  return (
    <div className="expands">
      {children.map(item => (
        <Link to={item.action} key={item.id} className='link' >{item.name}</Link>
      ))}
    </div>
  )
}

const Navbar = () => {
  const [expand, setExpand] = useState(0)

  useEffect(() => console.log(expand))
  return (
    <nav>
      <div className="logo">5e©ure_0?</div>
      <div className="search">
        <img src={SearchIcon} alt="search icon" className="searchIcon" />
        <input type="search" name="search" placeholder='Search' />
      </div>
      <div className="nav-actions">
        <button className="noti" onClick={() => setExpand((expand === 0 || expand === 2) ? 1 : 0)}>
          <img src={Notification} alt="Notification Bell" />
        </button>
        <button className="user" onClick={() => setExpand((expand === 0 || expand === 1) ? 2 : 0)}>
          <img src={User} alt="User Icon" />
          <h3>Sanskar</h3>
        </button>
        {expand !== 0 && <NavExpand>{expand === 2 ? UserItems : Notifications}</NavExpand>}
      </div>

    </nav>
  )
}

export default Navbar
