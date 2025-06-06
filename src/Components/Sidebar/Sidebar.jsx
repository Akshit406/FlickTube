import React from 'react'
import './Sidebar.css'

import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/pewdiepie.jfif'
import simon from '../../assets/mr_beast.jfif'
import tom from '../../assets/justin_bieber.jpg'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


const Sidebar = ({ sidebar, category, setCategory }) => {
    return (
        <div className={`sidebar ${sidebar === true ? "" : "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
                    <img src={home} /> <p>Home</p>
                </div>
                <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
                    <img src={game_icon} /> <p>Gaming</p>
                </div>
                <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
                    <img src={automobiles} /> <p>Automobiles</p>
                </div>
                <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
                    <img src={sports} /> <p>sports</p>
                </div>
                <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
                    <img src={entertainment} /> <p>Entertainment</p>
                </div>
                <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
                    <img src={tech} /> <p>Technology</p>
                </div>
                <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
                    <img src={music} /> <p>Music</p>
                </div>
                <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
                    <img src={blogs} /> <p>Blogs</p>
                </div>
                <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
                    <img src={news} /> <p>News</p>
                </div>

                < hr />

            </div>
            <div className="subscribed-list">
                <h3>Suscribed</h3>
                <div className="side-link">
                    <img src={jack} /> <p>PewDiePie</p>
                </div>
                <div className="side-link">
                    <img src={simon} /> <p>Mr Beast</p>
                </div>
                <div className="side-link">
                    <img src={tom} /> <p>Justin Bieber</p>
                </div>
                <div className="side-link">
                    <img src={megan} /> <p>Taylor Swift</p>
                </div>
                <div className="side-link">
                    <img src={cameron} /> <p>Code Academy</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;