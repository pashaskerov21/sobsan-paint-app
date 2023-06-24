import React from 'react'
import GeneralIcons from './GeneralIcons'

function MobileNav({fixed, theme, toggleTheme, toggleMobileMenu }) {
    
    return (
        <nav className={fixed ? 'mobile-nav fixed-top d-xl-none' : 'mobile-nav d-xl-none'}>
            <div className="container">
                <div className="inner">
                    <div className='menu-button' onClick={toggleMobileMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <GeneralIcons theme={theme} toggleTheme={toggleTheme} />                    
                </div>
            </div>
        </nav>
    )
}

export default MobileNav
