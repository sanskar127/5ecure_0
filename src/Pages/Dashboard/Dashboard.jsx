import React from 'react'
import './stylesheet.css'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import Backend from '../../Components/backend.json'
import AccountsCard from '../../Components/AccountsCard'
import AddIcon from '../../assets/add-icon.svg'

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
        <h2>24 Accounts</h2>
        <div className="main-body">
          {Backend.map(item => <AccountsCard key={item.id} name={item.name} icon={item.icon} accounts={item.accounts} />)}
          <AccountsCard icon={AddIcon} />
        </div>
      </section>
    </div>
  )
}

export default Dashboard
