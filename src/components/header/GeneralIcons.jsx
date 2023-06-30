import React from 'react'
import { Link } from 'react-router-dom'
import comparison_icon from '../../image/icon/compare-red.svg'
import heart_icon from '../../image/icon/heart-red.svg'
import basket_icon from '../../image/icon/basket-red.svg'
import loupe_icon from '../../image/icon/loupe-red.svg'
import login_icon from '../../image/icon/login-red.svg'
import Language from './Language'
import { useSelector } from 'react-redux'

function GeneralIcons({ theme, toggleTheme, toggleSearch }) {
  const language = useSelector(state => state.language.language)
  const text = require(`../../lang/${language}.json`);
  return (
    <div className='general-icons'>
      <Link to='/compare' className='item'><img src={comparison_icon} alt="general-icon" /></Link>
      <Link to='/wishlist' className='item'><img src={heart_icon} alt="general-icon" /></Link>
      <Link to='/basket' className='item'><img src={basket_icon} alt="general-icon" /></Link>
      <button onClick={() => toggleSearch()} className='item'><img src={loupe_icon} alt="general-icon" /></button>
      <Language />
      <Link to='/login' className='item login d-none d-xl-flex'><img src={login_icon} alt="general-icon" /> <span className='d-none d-sm-flex'>{text['sign-in']}</span></Link>
      <button className={theme === 'dark' ? 'theme-button active' : 'theme-button'} onClick={() => toggleTheme()}><i className={theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}></i></button>
    </div>
  )
}

export default GeneralIcons
