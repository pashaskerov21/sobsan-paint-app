import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import TextTranslate from '../translate/TextTranslate';
import ProductCard from '../components/product/ProductCard';

function SearchPage() {
    const language = useSelector(state => state.language.language)
    const text = require(`../lang/${language}.json`);
    const searchProducts = useSelector(state => state.productState.searchProducts)
    return (
        <section className="search-section">
            <div className="container">
                <div className="page-title">
                    <div className="root-links d-none d-md-flex">
                        <Link to='/'>{text['home-page']}</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link to='/wishlist'><TextTranslate text='Axtarış' /></Link>
                    </div>
                </div>
                {
                    searchProducts.length > 0 ? (
                        <div className="row">
                            {
                                searchProducts.map(product => (
                                    <div className='col-12 col-md-6 col-lg-4 col-xxl-3' key={product.id}>
                                        <ProductCard product={product}/>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <h3 className='alert-text'><TextTranslate text='Axtarışa uyğun nəticə tapılmadı' /></h3>
                    )
                }
            </div>
        </section>
    )
}

export default SearchPage
