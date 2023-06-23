import React, { useState } from 'react'
import GeneralIcons from './GeneralIcons'
import MobileMenu from './MobileMenu';

function MobileNav({ theme, toggleTheme }) {
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }
    return (
        <nav className='mobile-nav'>
            <div className="container">
                <div className="inner">
                    <div className='menu-button' onClick={toggleMobileMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <GeneralIcons theme={theme} toggleTheme={toggleTheme} />
                    <MobileMenu mobileMenu={mobileMenu} toggleMobileMenu={toggleMobileMenu}/>
                </div>
            </div>
        </nav>
    )
}

export default MobileNav
