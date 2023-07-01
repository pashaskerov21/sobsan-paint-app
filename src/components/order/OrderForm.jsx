import React, { useEffect, useState } from 'react'
import TextTranslate from '../../translate/TextTranslate';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeAllProductsFromBasket } from '../../redux/actions/ProductAction';
import { useNavigate } from 'react-router-dom';
import { sendOrderData } from '../../redux/actions/OrderAction';

function OrderForm() {
    const activeUserAccount = useSelector(state => state.accountState.activeUserAccount);
    const basketTotal = useSelector(state => state.productState.basketTotal)

    const [orderFirstName, setOrderFirstName] = useState(activeUserAccount?.userFirstName);
    const [orderLastName, setOrderLastName] = useState(activeUserAccount?.userLastName);
    const [orderAddress, setOrderAddress] = useState(activeUserAccount?.userAddress);
    const [orderPhone, setOrderPhone] = useState(activeUserAccount?.userPhone);
    const [orderEmail, setOrderEmail] = useState(activeUserAccount?.userEmail);
    const [orderNote, setOrderNote] = useState();


    const [deliveryPrice, setDeliveryPrice] = useState(5);
    const [discountPrice, setDiscountPrice] = useState(0);
    const [orderTotalPrice, setOrderTotalPrice] = useState(basketTotal + deliveryPrice + discountPrice);

    const [paymentStatus, setPaymentStatus] = useState('cash');
    const [deliveryStatus, setDeliveryStatus] = useState('baku');
    const basketProducts = useSelector(state => state.productState.basketProducts)

    useEffect(() => {
        if (deliveryStatus === 'region') {
            setDeliveryPrice(10)
            setDiscountPrice(0)
        } else {
            setDeliveryPrice(5)
            setDiscountPrice(0)
        }
    }, [deliveryStatus])


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { v4: uuidv4 } = require('uuid');

    useEffect(() => {
        setOrderTotalPrice(basketTotal + deliveryPrice + discountPrice)
    }, [basketTotal, deliveryPrice, discountPrice])

    const handleOrderFormSubmit = (e) => {
        e.preventDefault();
        let newOrderData = {
            orderID: uuidv4(),
            userID: activeUserAccount.userID,
            orderProducts: basketProducts,
            orderFirstName,
            orderLastName,
            orderAddress,
            orderPhone,
            orderEmail,
            orderNote,
            basketTotal,
            deliveryPrice,
            discountPrice,
            orderTotalPrice,
            paymentStatus,
            deliveryStatus,
        }

        dispatch(sendOrderData(newOrderData))
        dispatch(removeAllProductsFromBasket());

        toast.success('Sifariş qeydə alındı')
        setTimeout(() => {
            navigate('/profile')
        }, 2000)
    }

    return (
        <form onSubmit={handleOrderFormSubmit} className='form-general order'>
            <div className="row">
                <div className="col-12 col-lg-6 col-xxl-7">
                    <div className="inner">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="order-fname" placeholder="fname" value={activeUserAccount?.userFirstName} required onChange={(e) => setOrderFirstName(e.target.value)} />
                            <label htmlFor="order-fname"><TextTranslate text='Ad' /> *</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="order-lname" placeholder="lname" value={activeUserAccount?.userLastName} onChange={(e) => setOrderLastName(e.target.value)} />
                            <label htmlFor="order-lname"><TextTranslate text='Soyad' /></label>
                        </div>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="order-address" placeholder="address" value={activeUserAccount?.userAddress} required onChange={(e) => setOrderAddress(e.target.value)} />
                            <label htmlFor="order-address"><TextTranslate text='Çatdırılma ünvanı' /> *</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control" id="order-phone" placeholder="phone" value={activeUserAccount?.userPhone} required onChange={(e) => setOrderPhone(e.target.value)} />
                            <label htmlFor="order-phone"><TextTranslate text='Telefon' /> *</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="order-email" placeholder="email" value={activeUserAccount?.userEmail} required onChange={(e) => setOrderEmail(e.target.value)} />
                            <label htmlFor="order-email"><TextTranslate text='E-poçt' /> *</label>
                        </div>
                        <div className="form-floating">
                            <textarea id='order-note' className="form-control" placeholder='note' onChange={(e) => setOrderNote(e.target.value)}></textarea >
                            <label htmlFor="order-note"><TextTranslate text='Əlavə qeydləriniz' /> *</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-5">
                    <div className="inner">
                        <div className="order-info">
                            <h3 className="title"><TextTranslate text='Sifariş məlumatları' /></h3>
                            <div className="info-row">
                                <span><TextTranslate text='Cəmi' /></span>
                                <span>{basketTotal.toFixed(2)} AZN</span>
                            </div>
                            <div className="info-row">
                                <span><TextTranslate text='Çatdırılma' /></span>
                                <span>{deliveryPrice.toFixed(2)} AZN</span>
                            </div>
                            <div className="info-row">
                                <span><TextTranslate text='Endirim' /></span>
                                <span>{discountPrice.toFixed(2)} AZN</span>
                            </div>
                            <div className="info-row main">
                                <span><TextTranslate text='Endirim' /></span>
                                <span>{orderTotalPrice.toFixed(2)} AZN</span>
                            </div>
                            <div className="info-row mt-4">
                                <div className="form-check">
                                    <input type="radio" className='form-check-input' name='payment' checked={paymentStatus === 'cash'} value='cash' onChange={(e) => setPaymentStatus(e.target.value)} required />
                                    <label htmlFor="" className='form-check-label'><TextTranslate text='Nağd ödəniş' /></label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className='form-check-input' name='payment' checked={paymentStatus === 'card'} value='card' onChange={(e) => setPaymentStatus(e.target.value)} required />
                                    <label htmlFor="" className='form-check-label'><TextTranslate text='Visa/Master ilə ödəniş' /></label>
                                </div>
                            </div>
                            <div className="info-row mt-4">
                                <div className="form-check">
                                    <input type="radio" className='form-check-input' name='delivery' checked={deliveryStatus === 'baku'} value='baku' onChange={(e) => setDeliveryStatus(e.target.value)} required />
                                    <label htmlFor="" className='form-check-label'><TextTranslate text='Bakı şəhəri daxili' /></label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" className='form-check-input' name='delivery' checked={deliveryStatus === 'region'} value='region' onChange={(e) => setDeliveryStatus(e.target.value)} required />
                                    <label htmlFor="" className='form-check-label'><TextTranslate text='Regionlar' /></label>
                                </div>
                            </div>
                            <button className='submit-button' type="submit"><TextTranslate text='Sifarişi təsdiqlə' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default OrderForm
