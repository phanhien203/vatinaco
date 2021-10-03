import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './navbar.scss'


export default function Navbar() {
    const auth = useSelector(state => state.auth)
    const {user, isLogged} = auth

    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    return (
        <nav className="nav_bar_admin">
            <div className="avatar">
                <img src={user.avatar} />
            </div>
            <ul className="menu">
                <li className="active"><img src='/a_dashboard.svg'/></li>
                <li className="no"><img src='/a_data.svg'/></li>
                <li className="no"><img src='/a_sitemap.svg'/></li>
                <li className="no"><img src='/a_chart.svg'/></li>
                <li className="no"><img src='/a_edit-table.svg'/></li>
                <li className="no end"><img src='/a_setting.svg'/></li>
            </ul>

            <button className="btn_logout" onClick={handleLogout}><img src='/a_logout.svg'/></button>
        </nav>
    )
}

