import React from 'react'
import { Link } from 'react-router-dom'
import comparison_icon from '../../image/icon/compare-red.svg'
import heart_icon from '../../image/icon/heart-red.svg'
import basket_icon from '../../image/icon/basket-red.svg'
import loupe_icon from '../../image/icon/loupe-red.svg'
import Language from './Language'

function GeneralIcons({theme,toggleTheme}) {
  return (
    <div className='general-icons'>
      <Link to='/compare' className='item'><img src={comparison_icon} alt="general-icon"/></Link>
      <Link to='/wishlist' className='item'><img src={heart_icon} alt="general-icon"/></Link>
      <Link to='/basket' className='item'><img src={basket_icon} alt="general-icon"/></Link>
      <button className='item'><img src={loupe_icon} alt="general-icon"/></button>
      <button className='item' onClick={() => toggleTheme()}><i className={theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}></i></button>
      <Language/>
    </div>
  )
}

export default GeneralIcons
