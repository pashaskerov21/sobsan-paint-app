import React, { useState } from 'react'
import { productCategories } from '../../data/ProductData'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function CategoryNav() {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    const [activeSubcategory, setActiveSubCategory] = useState('');
    const toggleSubCategory = (id) => {
        if (activeSubcategory === id) {
            setActiveSubCategory('');
        } else {
            setActiveSubCategory(id);
        }
    }
    const openSubcategory = (id) => setActiveSubCategory(id);
    const closeSubcategory = () => setActiveSubCategory('') 
    return (
        <div className='category-nav'>
            {
                productCategories.map(category => (
                    <div className="category" key={category.id} onClick={() => toggleSubCategory(category.id)} onMouseMove={() => openSubcategory(category.id)} onMouseLeave={closeSubcategory}>
                        <Link to={`/${category.path}`} className='category-name'>{text[`${category.name}`]}</Link>
                        {
                            category.is_subcategory ? (
                                <div className={activeSubcategory === category.id ? 'subcategory-dropdown' : 'subcategory-dropdown d-none'} onMouseMove={() => openSubcategory(category.id)} onMouseLeave={closeSubcategory}>
                                    <div className="row">
                                        {
                                            category.subcategories.map(subcategory => (
                                                <div className={category.subcategories.length > 3 ? 'col-3' : 'col-4' } key={subcategory.id}>
                                                    <div className="subcategory">
                                                        <Link to={`/${category.path}/${subcategory.path}`} className='subcategory-name'>{text[`${subcategory.name}`]}</Link>
                                                        {
                                                            subcategory.is_altcategory ? (
                                                                <div className="altcategories">
                                                                    {
                                                                        subcategory.altcategories.map(altcategory => (
                                                                            <Link to={`/${category.path}/${subcategory.path}/${altcategory.path}`} key={altcategory.id}>{text[`${altcategory.name}`]}</Link>
                                                                        ))
                                                                    }
                                                                </div>
                                                            ) : null
                                                        }
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryNav
