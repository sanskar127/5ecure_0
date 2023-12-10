import React from 'react'
import './stylesheet.css'
import Backend from './backend.json'

const Cell = ({ name, icon, action = null }) => {
  return (
    <div className='cell' onClick={action}>
      <img src={icon} alt={name} />
      <h4>{name}</h4>
    </div>
  )
}

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <div className="sidebar-heading">Accounts</div>
      <div className="sidebar-body">
        {Backend.map(item => <Cell key={item.id} name={item.name} icon={item.icon} />)}
      </div>
    </section>
  )
}

export default Sidebar
