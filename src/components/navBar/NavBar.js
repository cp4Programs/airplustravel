import React from 'react'
import './navBar.css'
import { Link, useNavigate } from 'react-router-dom'

function NavBar({ navCategories }) {
    let navigate = useNavigate()

    return (
        <div className="navbar-container">
            {
                navCategories?.map(item => {
                    return <Link to={`/${item}`}>{item}</Link>
                })
            }
            <Link to={`/Auth`}><button>Log In</button></Link>
        </div>
    )
}

export default NavBar