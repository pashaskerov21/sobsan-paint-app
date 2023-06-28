import React, { useState } from 'react'
import basket_icon from '../../image/icon/basket-black.png'
import heart_icon from '../../image/icon/heart-black.png'
import compare_icon from '../../image/icon/compare-black.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Toolbar() {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    const [fixed, setFixed] = useState(false);
    window.addEventListener('scroll', function () {
        this.window.scrollY > 400 ? setFixed(true) : setFixed(false);
    })

    const comparisonProducts = useSelector(state => state.productState.comparisonProducts);
    const wishlistProducts = useSelector(state => state.productState.wishlistProducts)
    const basketProducts = useSelector(state => state.productState.basketProducts)



    return (
        <>
            <div className='toolbar-center'>
                <Link className='hot-line d-none d-md-flex'>
                    <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="label">
                        <span>* 4545</span>
                        <span>Qaynar xətt</span>
                    </div>
                </Link>
                <div className="toolbar-card">
                    <div className="icon">
                        <img src={basket_icon} alt="icon" />
                        <span className='amount'>{basketProducts.length}</span>
                    </div>
                    <Link to='/basket'>{text['basket']}</Link>
                </div>
                <div className="toolbar-card">
                    <div className="icon">
                        <img src={heart_icon} alt="icon" />
                        <span className='amount'>{wishlistProducts.length}</span>
                    </div>
                    <Link to='/wishlist'>{text['wishlist']}</Link>
                </div>
                <div className="toolbar-card">
                    <div className="icon">
                        <img src={compare_icon} alt="icon" />
                        <span className='amount'>{comparisonProducts.length}</span>
                    </div>
                    <Link to='/compare'>{text['comparisons']}</Link>
                </div>
            </div>
            <div className="toolbar-bottom">
                <button onClick={() => window.scrollTo(0,0)} className={fixed ? 'page-up-scroll-btn' : 'page-up-scroll-btn d-none'}><i className="fa-solid fa-arrow-up"></i></button>
                <Link className="hot-line-mobile d-md-none"><span>*4545</span></Link>
            </div>
        </>
    )
}

export default Toolbar
