import React from 'react'
import TextTranslate from '../translate/TextTranslate'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import delete_icon from '../image/icon/delete-icon.svg'
import { removeAllProductsFromBasket } from '../redux/actions/ProductAction';
import BasketTable from '../components/basket/BasketTable';


function Basket() {
  const language = useSelector(state => state.language.language)
  const text = require(`../lang/${language}.json`);
  const dispatch = useDispatch()

  const handleRemoveProductsButton = () => {
    dispatch(removeAllProductsFromBasket());
  }
  return (
    <section className='basket-section'>
      <div className="container">
        <div className="page-title secondary">
          <div className="left">
            <div className="root-links d-none d-md-flex">
              <Link to='/'>{text['home-page']}</Link>
              <i className="fa-solid fa-chevron-right"></i>
              <Link to='/basket'>{text['basket']}</Link>
            </div>
            <h2 className="section-title">{text['basket']}</h2>
          </div>
          <div className="right">
            <div className="remove-products-button" onClick={handleRemoveProductsButton}>
              <img src={delete_icon} alt="delete-icon" />
              <span><TextTranslate text='Təmizlə' /></span>
            </div>
          </div>
        </div>
        <BasketTable/>
      </div>
    </section>
  )
}

export default Basket
