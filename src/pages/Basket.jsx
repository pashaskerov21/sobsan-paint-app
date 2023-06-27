import React from 'react'
import TextTranslate from '../translate/TextTranslate'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import delete_icon from '../image/icon/delete-icon.svg'


function Basket() {
  const language = useSelector(state => state.language.language)
  const text = require(`../lang/${language}.json`);
  return (
    <section className='basket-section'>
      <div className="container">
        <div className="row layout-row">
          <div className="col-12">
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
                <div className="remove-products-button">
                  <img src={delete_icon} alt="delete-icon" />
                  <span><TextTranslate text='Təmizlə' /></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Basket
