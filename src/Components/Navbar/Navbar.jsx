import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/Flicktube_1.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/Cropped_Image.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faSquarePlus } from '@fortawesome/free-solid-svg-icons'



const Navbar = ({ setSidebar, setTheme }) => {

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))

    }

    return (
        <nav className='flex-div'>
            <div className="flex-div nav-left">
                <FontAwesomeIcon className='menu-icon' onClick={() => setSidebar(prev => prev === false ? true : false)} icon={faBars} />
                <Link to='/'><img className='logo' src={logo} /></Link>
            </div>
            <div className="flex-div nav-middle">
                <div className="search-box flex-div">
                    <input type="text" placeholder='search' />
                    <img src={search_icon} />
                </div>
            </div>
            <div className="flex-div nav-right">
                <div className="modeSwitch" >

                    <input type="checkbox" name="checkbox" id="toggle" onClick={toggleTheme} />
                    <label for="toggle" className="switch"></label>
                </div>
                {/* <img src={upload_icon} alt="" /> */}
                <FontAwesomeIcon className='nav-right-icons' icon={faSquarePlus} />
                <FontAwesomeIcon className='nav-right-icons' icon={faBell} />
                <img src={profile_icon} className='user-icon' alt="" />
            </div>
        </nav>
    )
}

export default Navbar