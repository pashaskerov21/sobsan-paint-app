import React from 'react'
import logo from '../../image/logo.svg'
import usta_logo from '../../image/usta_logo.png'
import { Link } from 'react-router-dom'
import CategoryNav from './CategoryNav'

function BottomNav({fixed}) {
    return (
        <nav className={fixed ? 'bottom-nav fixed-top d-none d-xl-flex' : 'bottom-nav d-none d-xl-flex'}>
            <div className="container">
                <div className="inner">
                    <div className="left">
                        <Link to='/' className='logo'><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="center">
                        <CategoryNav/>
                    </div>
                    <div className="right">
                        <Link to='/masters-union' className='masters-link'><img src={usta_logo} alt="usta-logo" /></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default BottomNav
