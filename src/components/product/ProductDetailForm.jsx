import React, { useEffect, useState } from 'react'
import TextTranslate from '../../translate/TextTranslate'
import CatalogModal from '../catalog/CatalogModal'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addProductToBasket } from '../../redux/actions/ProductAction';
// import { uuid } from 'uuidv4';

function ProductDetailForm({ product }) {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);

    const [selectedWeight, setSelectedWeight] = useState(product.weight[0])
    const [selectedCustomColor, setSelectedCustomColor] = useState();
    const [selectedModalCatalogColor, setSelectedModalCatalogColor] = useState()



    const [amount, setAmount] = useState(1);

    const handleIncrementButton = () => {
        setAmount(amount + 1)
    }
    const handleDecrementAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }
    const changeAmountInput = (e) => {
        const {value} = e.target
        setAmount(parseInt(value))
    }

    const [basketColor, setBasketColor] = useState();
    useEffect(() => {
        if (product.colorStatus === 'no-color') {
            setBasketColor('-')
        } else if (product.colorStatus === 'custom') {
            setBasketColor(selectedCustomColor)
        } else if (product.colorStatus === 'catalog') {
            setBasketColor(selectedModalCatalogColor)
        }
    }, [product, selectedCustomColor, selectedModalCatalogColor])


    const { v4: uuidv4 } = require('uuid');
    const dispatch = useDispatch();
    const basketProducts = useSelector(state => state.productState.basketProducts)
    const [productBasketStatus, setProductBasketStatus] = useState(false)
    const [productInBasket, setProductInBasket] = useState()
    useEffect(() => {
        let p = basketProducts.find((p) => p.id === product.id)
        if(p){
            setProductBasketStatus(true)
            setProductInBasket(p)
        }else{
            setProductBasketStatus(false)
        }
    },[basketProducts, product])
    // console.log(productInBasket)
    

    const submitProductDetailForm = (e) => {
        e.preventDefault();


        if (product.colorStatus !== 'no-color' && basketColor === undefined) {
            toast.error('Məhsul rəngini seçin!')
        } else {

            let payloadProduct = {
                ...product,
                productBasketID: uuidv4(),
                productBasketColor: basketColor,
                productBasketWeight: selectedWeight,
                productBasketAmount: amount,
            }
            if (productBasketStatus) {
                productInBasket.productBasketAmount = productInBasket.productBasketAmount +amount;
                if(productInBasket.productBasketWeight !== selectedWeight){
                    productInBasket.productBasketWeight = selectedWeight;
                    productInBasket.productBasketID = uuidv4();
                    dispatch(addProductToBasket(productInBasket));
                    toast.success('Məhsul səbət əlavə olundu');
                }
                if(productInBasket.productBasketColor !== basketColor){
                    productInBasket.productBasketColor = basketColor;
                    productInBasket.productBasketID = uuidv4();
                    dispatch(addProductToBasket(productInBasket));
                    toast.success('Məhsul səbətə əlavə olundu')
                }
            } else {
                dispatch(addProductToBasket(payloadProduct))
                toast.success('Məhsul səbətə əlavə olundu')
            }

        }
    }
    return (
        <form onSubmit={submitProductDetailForm} className='product-detail-form'>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    {
                        product.weight.length > 0 ? (
                            <>
                                <h5 className="title"><TextTranslate text='Çəkini seç' /></h5>
                                <div className="checkbox-buttons">
                                    {
                                        product.weight.map((param, index) => (
                                            <div className={`checkbox-button ${selectedWeight === param ? 'active' : null}`} key={index}>
                                                <label htmlFor={`checkbox-${index}`}><TextTranslate text={param} /></label>
                                                <input type="checkbox" id={`checkbox-${index}`} value={param} onChange={(e) => setSelectedWeight(e.target.value)} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        ) : null
                    }
                </div>
                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <div className="product-color-wrapper">
                        {
                            product.colorStatus !== 'no-color' ? (
                                product.colorStatus === 'custom' ? (
                                    <>
                                        <h5 className="title"><TextTranslate text='Rəngi seç' /></h5>
                                        {
                                            product.colors.length > 0 ? (
                                                <div className="color-checkboxes">
                                                    {
                                                        product.colors.map(color => (
                                                            <div className={`color-checkbox ${selectedCustomColor === color.name ? 'active' : null}`} key={color.id}>
                                                                <input type="checkbox" value={color.name} onChange={(e) => setSelectedCustomColor(e.target.value)} />
                                                                <div className="color" style={{ borderColor: `${selectedCustomColor === color.name ? selectedCustomColor !== 'Bəyaz' ? `${color.hexCode}` : '#212121' : 'transparent'}` }}>
                                                                    <span style={{ backgroundColor: `${color.hexCode}` }}></span>
                                                                </div>
                                                                <div className="name"><TextTranslate text={color.name} /></div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            ) : null
                                        }
                                    </>
                                ) : (
                                    <>
                                        <CatalogModal product={product} selectedModalCatalogColor={selectedModalCatalogColor} setSelectedModalCatalogColor={setSelectedModalCatalogColor} />
                                    </>
                                )
                            ) : null
                        }
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12 col-xl-7 col-xxl-8">
                    <div className="row submit-row">
                        <div className="col-12 col-lg-6">
                            <div className="product-counter">
                                <button type='button' onClick={handleDecrementAmount}><i className="fa-solid fa-minus"></i></button>
                                <input type="number" value={amount} onChange={changeAmountInput} />
                                <button type='button' onClick={handleIncrementButton}><i className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 ps-2">
                            <button type="submit" className='basket-button'>{text['add-basket']}</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12 col-xl-5 col-xxl-4">
                    <div className="product-price">
                        <div className="stok-value">
                            <i className="fa-solid fa-check"></i>
                            <span>{text['stock']}: {product.stockValue} {text['pieces']}</span>
                        </div>
                        <div className="price">{product.price.toFixed(2)} AZN</div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ProductDetailForm
