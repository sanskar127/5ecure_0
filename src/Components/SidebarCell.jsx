import React from 'react'
import './stylesheet.css'

const SidebarCell = ({ name, icon, action = null }) => {
  return (
    <div className='cell'>
      <img src={icon} alt={name} />
      <h4>{name}</h4>
    </div>
  )
}

export default SidebarCell
