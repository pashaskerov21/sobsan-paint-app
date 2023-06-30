import React, { useState } from 'react'
import MobileNav from './MobileNav'
import MobileMenu from './MobileMenu';
import TopNav from './TopNav';
import BottomNav from './BottomNav';
import Search from './Search';

function Header({ theme, toggleTheme }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }
  const handleLinkClick = () => {
    setMobileMenu(false)
  }

  const [showSearch, setShowSearch] = useState(false)
  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  const [fixed, setFixed] = useState(false);
  window.addEventListener('scroll', function () {
    this.window.scrollY > 400 ? setFixed(true) : setFixed(false);
  })
  return (
    <header>
      <MobileNav fixed={fixed} theme={theme} toggleTheme={toggleTheme} toggleMobileMenu={toggleMobileMenu} toggleSearch={toggleSearch} />
      <TopNav theme={theme} toggleTheme={toggleTheme} handleLinkClick={handleLinkClick} toggleSearch={toggleSearch} />
      <MobileMenu mobileMenu={mobileMenu} toggleMobileMenu={toggleMobileMenu} handleLinkClick={handleLinkClick} />
      <BottomNav fixed={fixed} theme={theme} toggleTheme={toggleTheme} />
      <Search showSearch={showSearch} toggleSearch={toggleSearch}/>
    </header>
  )
}

export default Header
