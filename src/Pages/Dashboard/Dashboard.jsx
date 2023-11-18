import React from 'react'
import './stylesheet.css'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import Backend from '../../Components/backend.json'
import AccountsCard from '../../Components/AccountsCard'

const Dashboard = () => {
  const item1 = Backend[0];
  return (
    <div className='dashboard'>
      <section className='nav-item'>
        <Navbar />

      </section>

      <section className='side-item'>
        <Sidebar />

      </section>

      <section className='main'>
        <AccountsCard name={item1.name} icon={item1.icon} accounts={item1.accounts} />
      </section>
    </div>
  )
}

export default Dashboard
