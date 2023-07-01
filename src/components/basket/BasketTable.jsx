import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseBasketProductAmount, increaseBasketProductAmount, removeAllProductsFromBasket, removeProductFromBasket, setBasketProductAmount } from '../../redux/actions/ProductAction';
import TextTranslate from '../../translate/TextTranslate';
import { Link } from 'react-router-dom';

function BasketTable() {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    const dispatch = useDispatch()
    const basketProducts = useSelector(state => state.productState.basketProducts)
    const handleRemoveProductsButton = () => {
        dispatch(removeAllProductsFromBasket());
    }

    const handleIncrementButton = (id) => {
        dispatch(increaseBasketProductAmount(id))
    }
    const handleDecrementAmount = (id) => {
       dispatch(decreaseBasketProductAmount(id))
    }
    const changeAmountInput = (value, id) => {
        let amountArray = [id, value]
        dispatch(setBasketProductAmount(amountArray))
        
    }

    const singleDeleteButtonClick = (id) => {
        dispatch(removeProductFromBasket(id))
    }

    const [total, setTotal] = useState(0)
    useEffect(() => {
        const newTotal = basketProducts.reduce((acc, product) => acc + product.price * product.productBasketAmount, 0);
        setTotal(newTotal)
    }, [basketProducts, dispatch]);

    const activeUserAccount = useSelector(state => state.accountState.activeUserAccount)
    return (
        <>
            {
                basketProducts.length > 0 ? (
                    <>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th><TextTranslate text='Foto' /></th>
                                        <th><TextTranslate text='Məhsul adı & Brend' /></th>
                                        <th><TextTranslate text='Rəng' /></th>
                                        <th><TextTranslate text='Çəki' /></th>
                                        <th><TextTranslate text='Qiymət' /></th>
                                        <th><TextTranslate text='Miqdar & Anbarda' /></th>
                                        <th><TextTranslate text='Cəmi' /></th>
                                        <th><TextTranslate text='Sil' /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        basketProducts.map(product => (
                                            <tr key={product.productBasketID}>
                                                <td>
                                                    <div className="td-inner">
                                                        <Link to={`/product/${product.path}`} className='product-image'>
                                                            <img src={product.img} alt="product" />
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="td-inner">
                                                        <div className="product-name">
                                                            <span className="brand">{product.brand}</span>
                                                            <Link to={`/product/${product.path}`}>{product.name}</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="td-inner">
                                                        <div className="product-color">
                                                            {
                                                                product.colorStatus === 'catalog' ? (
                                                                    <div><span>{product.productBasketColor.catalogName}</span> - {product.productBasketColor.mainColor ? <span>{product.productBasketColor.mainColor} - {product.productBasketColor.name}</span> : product.productBasketColor.code ? <span>{product.productBasketColor.name} - {product.productBasketColor.code}</span> : <span>{product.productBasketColor.name}</span>}  </div>
                                                                ) : product.productBasketColor
                                                            }
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="td-inner">
                                                        <div className="product-weight">
                                                            <span>{product.productBasketWeight}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="td-inner">
                                                        <div className="product-price">
                                                            <span>{product.price.toFixed(2)} Azn</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="td-inner">
                                                        <div className="stok-value">
                                                            <i className="fa-solid fa-check"></i>
                                                            <span>{text['stock']}: {product.stockValue} {text['pieces']}</span>
                                                        </div>
                                                        <div className="product-counter">
                                                            <button type='button' onClick={() => handleDecrementAmount(product.productBasketID)}><i className="fa-solid fa-minus"></i></button>
                                                            <input type="number" value={product.productBasketAmount} onChange={(e) => changeAmountInput(e.target.value,product.productBasketID)} />
                                                            <button type='button' onClick={() => handleIncrementButton(product.productBasketID)}><i className="fa-solid fa-plus"></i></button>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="td-inner">
                                                        <div className="product-total-price">
                                                            <span>{(product.productBasketAmount * product.price).toFixed(2)} Azn</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="td-inner">
                                                        <button onClick={() => singleDeleteButtonClick(product.productBasketID)} className="single-delete-button">
                                                            <i className='fa-solid fa-xmark'></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="table-bottom">
                            <div className="result">
                                <span className='label'><TextTranslate text='Ümumi məbləğ:'/></span>
                                <span className='total'>{total.toFixed(2)} AZN</span>
                            </div>
                            <div className="buttons">
                                <button onClick={handleRemoveProductsButton} className='button reset'><TextTranslate text='Səbəti təmizlə'/></button>
                                <Link to={activeUserAccount ? '/basket/order' : '/login'} className='button confirm'><TextTranslate text='Təsdiqlə'/></Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <h3 className='alert-text'><TextTranslate text='Səbətdə məhsul yoxdur' /></h3>
                )
            }
        </>
    )
}

export default BasketTable
