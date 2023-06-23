import React from 'react'
import MobileNav from './MobileNav'

function Header({theme,toggleTheme}) {
  return (
    <header>
        <MobileNav theme={theme} toggleTheme={toggleTheme}/>
    </header>
  )
}

export default Header
