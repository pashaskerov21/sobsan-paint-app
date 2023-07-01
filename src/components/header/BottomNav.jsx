import React from 'react'
import logo from '../../image/logo.svg'
import usta_logo from '../../image/usta_logo.png'
import { Link } from 'react-router-dom'
import CategoryNav from './CategoryNav'
import { useSelector } from 'react-redux'
import Language from './Language'
import login_icon from '../../image/icon/login-red.svg'

function BottomNav({ fixed, theme, toggleTheme }) {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    const activeUserAccount = useSelector(state => state.accountState.activeUserAccount)
    return (
        <nav className={fixed ? 'bottom-nav fixed-top d-none d-xl-flex' : 'bottom-nav d-none d-xl-flex'}>
            <div className="container">
                <div className="inner">
                    <div className="left">
                        <Link to='/' className='logo'><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="center">
                        <CategoryNav />
                    </div>
                    <div className="right">
                        <Link to='/masters-union' className={fixed ? 'masters-link d-none' : 'masters-link'}><img src={usta_logo} alt="usta-logo" /></Link>
                        <div className={fixed ? 'fix-nav-items' : 'fix-nav-items d-none'}>
                            {
                                activeUserAccount ? (
                                    <Link to='/profile' className='profile'><i className="fa-solid fa-user"></i></Link>
                                ) : (
                                    <Link to='/login' className='login'><img src={login_icon} alt="general-icon" /> <span>{text['sign-in']}</span></Link>
                                )
                            }
                            
                            <Language />
                            <button className={theme === 'dark' ? 'theme-button active' : 'theme-button'} onClick={() => toggleTheme()}><i className={theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default BottomNav
