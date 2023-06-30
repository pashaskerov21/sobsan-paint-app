import React, { useEffect, useState } from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import { useSelector } from 'react-redux';
import { colorCatalog } from '../data/color-catalog/Catalog';
import { catalogSobmatik } from '../data/color-catalog/Sobmatik';
import CatalogAccordion from '../components/catalog/CatalogAccordion';
import { productCategories } from '../data/ProductData';


function Catalogs() {
  const language = useSelector(state => state.language.language);
  const text = require(`../lang/${language}.json`);

  const [activeCatalogCategory, setActiveCatalogCategory] = useState('all');
  const handleCatalogCategoryClick = (category) => {
    setActiveCatalogCategory(category);
  }

  const [catalog, setCatalog] = useState([]);
  const [sobmatikStatus, setSobmatikStatus] = useState(false)
  useEffect(() => {
    let filteredCatalogs = [];
    if (activeCatalogCategory === 'all') {
      filteredCatalogs = colorCatalog.slice();
    } else {
      filteredCatalogs = colorCatalog.filter((c) => c.category === activeCatalogCategory);
    }
    if (activeCatalogCategory === catalogSobmatik.category || activeCatalogCategory === 'all') {
      setSobmatikStatus(true)
    } else {
      setSobmatikStatus(false)
    }
    setCatalog([...filteredCatalogs])

  }, [activeCatalogCategory])
  return (
    <PrimarySection className='catalog' path='catalogs' rootLink='Rəng kataloqu' sectionTitle='Rəng kataloqu' >
      <div className="category-buttons-row">
        <button className={activeCatalogCategory === 'all' ? 'active' : ''} onClick={() => handleCatalogCategoryClick('all')}>{text['all']}</button>
        {
          productCategories.map(category => (
            <button className={activeCatalogCategory === category.name ? 'active' : ''} onClick={() => handleCatalogCategoryClick(category.name)} key={category.id}>{text[`${category.name}`]}</button>
          ))
        }
      </div>
      <CatalogAccordion sobmatikStatus={sobmatikStatus} catalog={catalog} />
    </PrimarySection>
  )
}

export default Catalogs
