import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo.svg'
import login_icon from '../../image/icon/login-red.svg'
import { useSelector } from 'react-redux'
import MobileCategory from './MobileCategory'
import PageLinks from './PageLinks'



function MobileMenu({ mobileMenu, toggleMobileMenu }) {
  const language = useSelector(state => state.language.language)
  const text = require(`../../lang/${language}.json`);
  return (
    <>
      <div className={mobileMenu ? 'mobile-menu-backdrop active' : 'mobile-menu-backdrop'} onClick={toggleMobileMenu}></div>
      <div className={mobileMenu ? 'mobile-menu active' : 'mobile-menu'}>
        <div className="header">
          <Link to='/' className='logo'><img src={logo} alt="logo" /></Link>
          <div className="icons">
            <Link className='icon-red'><i className='fa-solid fa-phone'></i></Link>
            <Link className='icon-red'><i className='fa-solid fa-question'></i></Link>
            <Link to='/login'><img src={login_icon} alt="general-icon" /> <span className='d-none d-sm-flex'>{text['sign-in']}</span></Link>
          </div>
          <button className='close-button' onClick={toggleMobileMenu}><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div className="menu-body">
          <MobileCategory/>
          <PageLinks/>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
