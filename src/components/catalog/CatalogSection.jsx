import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productCategories } from '../../data/ProductData';
import CatalogAccordion from './CatalogAccordion';

function CatalogSection() {
    const language = useSelector(state => state.language.language);
    const text = require(`../../lang/${language}.json`);

    const [activeCatalogCategory, setActiveCatalogCategory] = useState('all');
    const handleCatalogCategoryClick = (category) => {
        setActiveCatalogCategory(category)
    } 
    return (
        <section className='catalogs'>
            <div className="container">
                <div className="page-title">
                    <div className="root-links d-none d-md-flex">
                        <Link to='/'>{text['home-page']}</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link to={`/catalogs`}>{text['color-catalog']}</Link>
                    </div>
                    <h2 className="section-title">{text['color-catalog']}</h2>
                </div>
                <div className="catalog-category-buttons">
                    <button className={activeCatalogCategory === 'all' ? 'active' : ''} onClick={() => handleCatalogCategoryClick('all')}>{text['all']}</button>
                    {
                        productCategories.map(category => (
                            <button className={activeCatalogCategory === category.name ? 'active' : ''} onClick={() => handleCatalogCategoryClick(category.name)} key={category.id}>{text[`${category.name}`]}</button>
                        ))
                    }
                </div>
                <CatalogAccordion/>
            </div>
        </section>
    )
}

export default CatalogSection
