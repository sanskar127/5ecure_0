import React from 'react'
import './stylesheet.css'
import Backend from './backend.json'
import SidebarCell from './SidebarCell'

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <div className="sidebar-heading">Accounts</div>
      {
        Backend.map(item => <SidebarCell key={item.id} name={item.name} icon={item.icon} /> )
      }
      
    </section>
  )
}

export default Sidebar
