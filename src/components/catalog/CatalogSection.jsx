import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productCategories } from '../../data/ProductData';
import CatalogAccordion from './CatalogAccordion';
import { colorCatalog } from '../../data/color-catalog/Catalog';
import { catalogSobmatik } from '../../data/color-catalog/Sobmatik';

function CatalogSection() {
    const language = useSelector(state => state.language.language);
    const text = require(`../../lang/${language}.json`);

    const [activeCatalogCategory, setActiveCatalogCategory] = useState('all');

    //const [catalog, setCatalog] = useState([...colorCatalog]);
    

    const handleCatalogCategoryClick = (category) => {
        setActiveCatalogCategory(category);
    } 
    
    const [catalog, setCatalog] = useState([]);
    const [sobmatikStatus, setSobmatikStatus] = useState(false)
    useEffect(() => {
        let filteredCatalogs = [];
        if(activeCatalogCategory === 'all'){
            filteredCatalogs = colorCatalog;
        }else{
            filteredCatalogs = colorCatalog.filter((c) => c.category === activeCatalogCategory);
        }
        if(activeCatalogCategory === catalogSobmatik.category || activeCatalogCategory === 'all'){
            setSobmatikStatus(true)
        }else{
            setSobmatikStatus(false)
        }
        setCatalog([...filteredCatalogs])
        
    },[activeCatalogCategory])
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
                <CatalogAccordion sobmatikStatus={sobmatikStatus} catalog={catalog}/>
            </div>
        </section>
    )
}

export default CatalogSection
