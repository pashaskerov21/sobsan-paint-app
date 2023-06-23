import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import arrow_right from '../../image/icon/arrow-right.svg';

function PageLinks() {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    const [aboutMenu, setAboutMenu] = useState(false);
    const [mediaMenu, setMediaMenu] = useState(false);
    const toggleAboutMenu = () => setAboutMenu(!aboutMenu);
    const openAboutMenu = () => setAboutMenu(true);
    const closeAboutMenu = () => setAboutMenu(false);
    const toggleMediaMenu = () => setMediaMenu(!mediaMenu);
    const openMediaMenu = () => setMediaMenu(true);
    const closeMediaMenu = () => setMediaMenu(false);
    return (
        <div className='page-links'>
            <div className="link-dropdown" onMouseMove={openAboutMenu} onMouseLeave={closeAboutMenu}>
                <div className="dropdown-btn">
                    <Link to='/about-us'>{text['about-us']}</Link>
                    <button onClick={toggleAboutMenu}><img src={arrow_right} alt="arrow" /></button>
                </div>
                <div className={aboutMenu ? 'link-menu' : 'link-menu d-none'} onMouseMove={openAboutMenu} onMouseLeave={closeAboutMenu}>
                    <Link to='/about-coloring-system'>{text['about-the-coloring-system']}</Link>
                </div>
            </div>
            <Link to='catalogs'>{text['catalogs']}</Link>
            <div className="link-dropdown" onMouseMove={openMediaMenu} onMouseLeave={closeMediaMenu}>
                <div className="dropdown-btn">
                    <Link>{text['media']}</Link>
                    <button onClick={toggleMediaMenu}><img src={arrow_right} alt="arrow" /></button>
                </div>
                <div className={mediaMenu ? 'link-menu' : 'link-menu d-none'} onMouseMove={openMediaMenu} onMouseLeave={closeMediaMenu}>
                    <Link to='/media/actions'>{text['actions']}</Link>
                    <Link to='/media/news'>{text['news']}</Link>
                    <Link to='/media/gallery'>{text['gallery']}</Link>
                </div>
            </div>
            <Link to='/payment-and-delivery'>{text['payment-and-delivery']}</Link>
            <Link to='/warranty-conditions'>{text['warranty-conditions']}</Link>
            <Link to='/contact-us'>{text['contact-us']}</Link>
        </div>
    )
}

export default PageLinks
