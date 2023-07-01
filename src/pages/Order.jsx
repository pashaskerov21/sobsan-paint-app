import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import TextTranslate from '../translate/TextTranslate';
import OrderForm from '../components/order/OrderForm';

function Order() {
    const language = useSelector(state => state.language.language)
    const text = require(`../lang/${language}.json`);

    const activeUserAccount = useSelector(state => state.accountState.activeUserAccount);
    const navigate = useNavigate();

    

    useEffect(() => {
        if(!activeUserAccount){
            navigate('/404')
        }
    },[activeUserAccount,navigate])
    return (
        <section className='order-section'>
            <div className="container">
                <div className="page-title">
                    <div className="root-links d-none d-md-flex">
                        <Link to='/'>{text['home-page']}</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link to='/basket'><TextTranslate text='Səbət' /></Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link to='/basket/order'><TextTranslate text='Sifariş' /></Link>
                    </div>
                    <h2 className="section-title"><TextTranslate text="Sifariş" /></h2>
                </div>
                <OrderForm/>
            </div>
        </section>
    )
}

export default Order
