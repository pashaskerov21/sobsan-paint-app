import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { productsArr } from '../../data/ProductData';
import { useSelector } from 'react-redux';

function ProductDetail() {
  const language = useSelector(state => state.language.language)
  const text = require(`../../lang/${language}.json`);

  const { productPath } = useParams();
  const product = productsArr.find((product) => product.path === productPath);
  
  return (
    <section className='product-detail'>
      <div className="container">
        <div className="page-title">
          <div className="root-links d-none d-md-flex">
            <Link to='/'>{text['home-page']}</Link>
          </div>
          <h2 className="section-title">{product.name}</h2>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
