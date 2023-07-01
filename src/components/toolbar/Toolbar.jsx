import React, { useEffect, useState } from 'react'
import basket_icon from '../../image/icon/basket-black.png'
import heart_icon from '../../image/icon/heart-black.png'
import compare_icon from '../../image/icon/compare-black.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveUserBasketProducts, saveUserCompareProducts, saveUserWishlistProducts } from '../../redux/actions/AccountActions'

function Toolbar() {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    const [fixed, setFixed] = useState(false);
    window.addEventListener('scroll', function () {
        this.window.scrollY > 400 ? setFixed(true) : setFixed(false);
    })


    const activeUserAccount = useSelector(state => state.accountState.activeUserAccount);

    
    
    const basketProducts = useSelector(state => state.productState.basketProducts)
    const wishlistProducts = useSelector(state => state.productState.wishlistProducts)
    const comparisonProducts = useSelector(state => state.productState.comparisonProducts);

    // const userBasketProducts =useSelector(state => state.accountState.userBasketProducts)
    // const userWishlistProducts = useSelector(state => state.accountState.userWishlistProducts)
    // const userCompareProducts = useSelector(state => state.accountState.userCompareProducts);

    const [basketLength, setBasketLength] = useState(basketProducts.length)
    const [wishlistLength, setWishlistLength] = useState(wishlistProducts.length)
    const [compareLength, setCompareLength] = useState(comparisonProducts.length)


    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(saveUserBasketProducts(basketProducts))
    //     dispatch(saveUserWishlistProducts(wishlistProducts))
    //     dispatch(saveUserCompareProducts(comparisonProducts))
    // },[dispatch,basketProducts,wishlistProducts,comparisonProducts]) 

    // useEffect(() => {
        
    //     if(activeUserAccount){
    //         setBasketLength(userBasketProducts?.length)
    //         setWishlistLength(userWishlistProducts?.length)
    //         setCompareLength(userCompareProducts?.length)
    //     }else{
    //         setBasketLength(basketProducts.length)
    //         setWishlistLength(wishlistProducts.length)
    //         setCompareLength(comparisonProducts.length)
    //     }
    //     console.log(wishlistProducts)
    // },[activeUserAccount, basketProducts, wishlistProducts, comparisonProducts, userBasketProducts, userWishlistProducts, userCompareProducts])


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
                        <span className='amount'>{basketLength}</span>
                    </div>
                    <Link to='/basket'>{text['basket']}</Link>
                </div>
                <div className="toolbar-card">
                    <div className="icon">
                        <img src={heart_icon} alt="icon" />
                        <span className='amount'>{wishlistLength}</span>
                    </div>
                    <Link to='/wishlist'>{text['wishlist']}</Link>
                </div>
                <div className="toolbar-card">
                    <div className="icon">
                        <img src={compare_icon} alt="icon" />
                        <span className='amount'>{compareLength}</span>
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
