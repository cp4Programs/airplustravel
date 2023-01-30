import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

function NavBar({ navCategories }) {


    return (
        <div className="navbar-container">
            {
                navCategories?.map(item => {
                    return <Link to={`/${item}`}>{item}</Link>
                })
            }
            <button>Log In</button>
        </div>
    )
}

export default NavBar