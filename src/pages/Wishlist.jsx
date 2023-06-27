import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import delete_icon from '../image/icon/delete-icon.svg'
import TextTranslate from '../translate/TextTranslate';
import ProductCard from '../components/product/ProductCard';
import { removeAllProductsFromWishlist } from '../redux/actions/ProductAction';
import { productCategories } from '../data/ProductData';

function Wishlist() {
  const language = useSelector(state => state.language.language)
  const text = require(`../lang/${language}.json`);

  const dispatch = useDispatch()

  const wishlistProducts = useSelector(state => state.productState.wishlistProducts);

  const handleRemoveProductsButton = () => {
    dispatch(removeAllProductsFromWishlist());
  }

  const [activeCatalogCategory, setActiveCatalogCategory] = useState('all');
  const handleCatalogCategoryClick = (category) => {
    setActiveCatalogCategory(category);
  }

  return (
    <section className='wishlist-section'>
      <div className="container">
        <div className="row layout-row">
          <div className="col-12">
            <div className="page-title secondary">
              <div className="left">
                <div className="root-links d-none d-md-flex">
                  <Link to='/'>{text['home-page']}</Link>
                  <i className="fa-solid fa-chevron-right"></i>
                  <Link to='/wishlist'>{text['wishlist']}</Link>
                </div>
                <h2 className="section-title">{text['wishlist']}</h2>
              </div>
              <div className="right">
                <div className="remove-products-button" onClick={handleRemoveProductsButton}>
                  <img src={delete_icon} alt="delete-icon" />
                  <span><TextTranslate text='Təmizlə' /></span>
                </div>
              </div>
            </div>
          </div>
          {
            wishlistProducts.length > 0 ? (
              <div className="col-12 p-0">
                <div className="row">
                  <div className="col-12">
                    <div className="category-buttons-row">
                      <button className={activeCatalogCategory === 'all' ? 'active' : ''} onClick={() => handleCatalogCategoryClick('all')}>{text['all']}</button>
                      {
                        productCategories.map(category => (
                          <button className={activeCatalogCategory === category.name ? 'active' : ''} onClick={() => handleCatalogCategoryClick(category.name)} key={category.id}>{text[`${category.name}`]}</button>
                        ))
                      }
                    </div>
                  </div>
                  {
                    wishlistProducts.map(product => (
                      <div className="col-12 col-md-6 col-lg-4 col-xxl-3" key={product.id}>
                        <ProductCard product={product} />
                      </div>
                    ))
                  }
                </div>
              </div>
            ) : (
              <h3><TextTranslate text='Seçilmiş məhsul yoxdur' /></h3>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Wishlist
