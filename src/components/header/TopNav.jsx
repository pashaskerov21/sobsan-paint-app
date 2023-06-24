import React from 'react'
import GeneralIcons from './GeneralIcons'
import PageLinks from './PageLinks'
import SocialMedia from '../SocialMedia'

function TopNav({ theme, toggleTheme, handleLinkClick }) {
    return (
        <nav className='top-nav d-none d-xl-flex'>
            <div className="container">
                <div className="inner">
                    <div className="left">
                        <PageLinks handleLinkClick={handleLinkClick}/>
                    </div>
                    <div className="right">
                        <SocialMedia/>
                        <GeneralIcons theme={theme} toggleTheme={toggleTheme}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopNav
