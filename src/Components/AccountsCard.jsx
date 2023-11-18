import React from 'react'
import './stylesheet.css'

const AccountsCard = ({ name = null, icon = null, accounts = null, action = null, style }) => {
    return (
        <div className='accounts-card' style={style} onClick={action}>
            <img src={icon} alt={name} />
            <h3>{name}</h3>
            <h4>{accounts} {accounts == 1 ? "Account" : (accounts == null ? null : "Accounts")}</h4>
        </div>
    )
}

export default AccountsCard
