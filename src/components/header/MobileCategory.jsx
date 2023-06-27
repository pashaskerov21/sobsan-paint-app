import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { productCategories } from '../../data/ProductData'
import arrow_right from '../../image/icon/arrow-right.svg'
import { Link } from 'react-router-dom';

function MobileCategory({handleLinkClick}) {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    const [activeSubcategory, setActiveSubCategory] = useState('');
    const [activeAltcategory, setActiveAltcategory] = useState('');
    const toggleSubCategory = (id) => {
        if (activeSubcategory === id) {
            setActiveSubCategory('');
        } else {
            setActiveSubCategory(id);
        }
    }
    const openSubcategory = (id) => setActiveSubCategory(id);
    const closeSubcategory = () => setActiveSubCategory('') 
    const toggleAltcategory = (id) => {
        if (activeAltcategory === id) {
            setActiveAltcategory('');
        } else {
            setActiveAltcategory(id);
        }
    }
    const openAltcategory = (id) => setActiveAltcategory(id);
    const closeAltcategory = () => setActiveAltcategory('');
    return (
        <div className="mobile-category-links">
            {
                productCategories.map(category => (
                    <div className="category" key={category.id} onMouseMove={() => openSubcategory(category.id)} onMouseLeave={closeSubcategory}>
                        <div className="link-row">
                            <Link to={`/${category.path}`} onClick={() => handleLinkClick()}>{text[`${category.name}`]}</Link>
                            {
                                category.is_subcategory ? (
                                    <button onClick={() => toggleSubCategory(category.id)} className={activeSubcategory === category.id ? 'active' : null}><img src={arrow_right} alt="arrow" /></button>
                                ) : null
                            }
                        </div>
                        {
                            category.is_subcategory ? (
                                <div className={activeSubcategory === category.id ? 'subcategories' : 'subcategories d-none'} >
                                    {
                                        category.subcategories.map(subcategory => (
                                            <div className="subcategory" key={subcategory.id} onMouseMove={() => openAltcategory(subcategory.id)} onMouseLeave={closeAltcategory}>
                                                <div className="link-row">
                                                    <Link to={`/${category.path}/${subcategory.path}`} onClick={() => handleLinkClick()}>{text[`${subcategory.name}`]}</Link>
                                                    {
                                                        subcategory.is_altcategory ? (
                                                            <button onClick={() => toggleAltcategory(subcategory.id)} className={activeAltcategory === subcategory.id ? 'active' : null}><img src={arrow_right} alt="arrow" /></button>
                                                        ) : null
                                                    }
                                                </div>
                                                {
                                                    subcategory.is_altcategory ? (
                                                        <div className={activeAltcategory === subcategory.id ? 'altcategories' : 'altcategories d-none'}>
                                                            {
                                                                subcategory.altcategories.map(altcategory => (
                                                                    <div className="altcategory" key={altcategory.id}>
                                                                        <div className="link-row">
                                                                            <Link to={`/${category.path}/${subcategory.path}/${altcategory.path}`} onClick={() => handleLinkClick()}>{text[`${altcategory.name}`]}</Link>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    ) : null
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : null
                        }
                    </div>

                ))
            }
        </div>
    )
}

export default MobileCategory
