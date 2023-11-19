import React from 'react'
import './stylesheet.css'

const AccountsCard = ({ name, icon, accounts, action = null }) => {
    return (
        <div className='accounts-card' onClick={action}>
            <img src={icon} alt={name} />
            <div className="accounts-label">
                <h3>{name}</h3>
                <h4>{accounts} {accounts == 1 ? "Account" : (accounts == undefined ? null : "Accounts")}</h4>
            </div>
        </div>
    )
}

export default AccountsCard
