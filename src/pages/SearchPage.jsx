import React from 'react'
import { useSelector } from 'react-redux';
import TextTranslate from '../translate/TextTranslate';
import ProductCard from '../components/product/ProductCard';
import PrimarySection from '../components/sections/PrimarySection';

function SearchPage() {
    const searchProducts = useSelector(state => state.productState.searchProducts)
    return (
        <PrimarySection className='search' path='search' rootLink='Axtarış' sectionTitle='Axtarış'>
            {
                searchProducts.length > 0 ? (
                    <div className="row">
                        {
                            searchProducts.map(product => (
                                <div className='col-12 col-md-6 col-lg-4 col-xxl-3' key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <h3 className='alert-text'><TextTranslate text='Axtarışa uyğun nəticə tapılmadı' /></h3>
                )
            }
        </PrimarySection>
    )
}

export default SearchPage
