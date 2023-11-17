import React from 'react'
import './stylesheet.css'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <section className='nav-item'>
        <Navbar />

      </section>

      <section className='side-item'>
        <Sidebar />

      </section>

      <section className='main'>

      </section>
    </div>
  )
}

export default Dashboard
