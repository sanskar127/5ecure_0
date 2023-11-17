import React from 'react'
import './stylesheet.css'
import SearchIcon from '../assets/search.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">5e©ure_0?</div>
      <div className="search">
        <img src={SearchIcon} alt="search icon" className="searchIcon" />
        <input type="search" name="search" placeholder='Search' />
      </div>
    </nav>
  )
}

export default Navbar
