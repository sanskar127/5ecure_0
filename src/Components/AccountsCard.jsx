import React from 'react'
import './stylesheet.css'

const AccountsCard = ({ name, icon, accounts, action = null }) => {
    return (
        <div className='accounts-card' onClick={action}>
            <img src={icon} alt={name} />
            <h3>{name}</h3>
            <h4>{accounts} {accounts==1 ? "Account" : "Accounts"}</h4>
        </div>
    )
}

export default AccountsCard
