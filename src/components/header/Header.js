import React from 'react'
import './header.css'
import airplusLogo from '../../assets/airplusLogo.png'
import { AiOutlinePhone } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import NavBar from '../navBar/NavBar'

function Header({ navCategories }) {


    return (
        <div className="header-container">
            <div className="header-group">
                <div><img className="logo" src={airplusLogo} /></div>
                <div className="contact-info-container">
                    <AiOutlinePhone />
                    <p>(562)863-0624,</p>
                    <p>(866)664-7611</p>
                    <FiMail />
                    <p>info@airplustravel.net</p>
                </div>

            </div>
            <NavBar navCategories={navCategories} />


        </div>

    )
}

export default Header