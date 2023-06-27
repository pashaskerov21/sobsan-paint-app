import React, { useEffect, useState } from 'react'
import TextTranslate from '../../translate/TextTranslate'
import { Link, useNavigate } from 'react-router-dom'
import loader from '../../image/loader.svg'
import { useDispatch, useSelector } from 'react-redux'
import basket_white from '../../image/icon/basket-white.svg'
import compare_red from '../../image/icon/compare-red.svg'
import compare_white from '../../image/icon/compare-white.svg'
import heaert_red from '../../image/icon/heart-red.svg'
import heaert_full from '../../image/icon/heart-full.svg'
import { addProductToComparisons, addProductToWishlist, removeProductFromComparisons, removeProductFromWishlist } from '../../redux/actions/ProductAction'



function ProductCard({ viewFilter, product }) {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [])

    const [basketActive, setBasketActive] = useState(false);
    
    const handleBasketButton = (e) => {
        e.preventDefault();
        setBasketActive(true)

        setTimeout(() => {
            navigate(`/product/${product.path}`);
        }, 1000);
    }

    const comparisonProducts = useSelector(state => state.productState.comparisonProducts);
    const productCompareStatus = comparisonProducts.find((p) => p.id === product.id);
    const handleCompareButton = () => {
        if(productCompareStatus){
            dispatch(removeProductFromComparisons(product.id))
        }else{
            dispatch(addProductToComparisons(product))
        }
    }

    const wishlistProducts = useSelector(state => state.productState.wishlistProducts);
    const productWishlistStatus = wishlistProducts.find((p) => p.id === product.id);
    const handleHeartButton = () => {
        if(productWishlistStatus){
            dispatch(removeProductFromWishlist(product.id));
        }else{
            dispatch(addProductToWishlist(product))
        }
    }
    
    

    return (
        <div className={viewFilter === 'list' ? 'product-card list-version' : 'product-card'}>
            <div className="header">
                <div className="badge-nav">
                    {
                        product.offered ? (
                            <div className="badge ordered">
                                <TextTranslate text={'TƏKLİF OLUNAN'} />
                            </div>
                        ) : null
                    }
                    {
                        product.isNew ? (
                            <div className="badge new">
                                <TextTranslate text={'YENİ'} />
                            </div>
                        ) : null
                    }
                </div>
                <Link to={`/product/${product.path}`} className="product-image">
                    {
                        loading ? (
                            <img src={loader} alt="loader" />
                        ) : (
                            <img src={product.img} alt="product" />
                        )
                    }
                </Link>
            </div>
            <div className="body">
                <div className="top">
                    <span className='brand'>{product.brand}</span>
                    <Link to={`/product/${product.path}`} className="name">{product.name}</Link>
                </div>
                <div className="description">
                    {
                        product.text.description !== '' && <TextTranslate text={`${product.text.description}`} />
                    }
                </div>
                <div className="bottom">
                    <div className="price">{product.price.toFixed(2)} AZN</div>
                    <div className="stok-value">
                        <i className="fa-solid fa-check"></i>
                        <span>{text['stock']}: {product.stockValue} {text['pieces']}</span>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Link onClick={handleBasketButton} className={basketActive ? 'basket-button active card-button' : 'basket-button card-button'}>
                    <div className="label">{text['add-basket']}</div>
                    <div className="icon"><img src={basket_white} alt="basket-icon" /></div>
                </Link>
                <div className="bottom">
                    <div className={productCompareStatus ? 'compare-button card-button active' : 'compare-button card-button'} onClick={handleCompareButton}>
                        <img className='red' src={compare_red} alt="compare-icon" />
                        <img className='white' src={compare_white} alt="compare-icon" />
                        <div className="label">{text['comparison']}</div>
                    </div>
                    <button className="heart-button card-button" onClick={handleHeartButton}>
                        {
                            productWishlistStatus ? (
                                <img src={heaert_full} alt="heart-icon" />
                            ) : (
                                <img src={heaert_red} alt="heart-icon" />
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
