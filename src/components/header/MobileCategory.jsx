import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { productCategories } from '../../data/ProductData'
import arrow_right from '../../image/icon/arrow-right.svg'
import { Link } from 'react-router-dom';

function MobileCategory() {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    const [activeSubcategory, setActiveSubCategory] = useState('');
    const [activeType, setActiveType] = useState('');
    const toggleSubCategory = (id) => {
        if (activeSubcategory === id) {
            setActiveSubCategory('');
        } else {
            setActiveSubCategory(id);
        }
    }
    const openSubcategory = (id) => setActiveSubCategory(id);
    const closeSubcategory = () => setActiveSubCategory('') 
    const toggleType = (id) => {
        if (activeType === id) {
            setActiveType('');
        } else {
            setActiveType(id);
        }
    }
    const openType = (id) => setActiveType(id);
    const closeType = () => setActiveType('');
    return (
        <div className="mobile-category-links">
            {
                productCategories.map(category => (
                    <div className="category" key={category.id} onMouseMove={() => openSubcategory(category.id)} onMouseLeave={closeSubcategory}>
                        <div className="link-row">
                            <Link>{text[`${category.name}`]}</Link>
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
                                            <div className="subcategory" key={subcategory.id} onMouseMove={() => openType(subcategory.id)} onMouseLeave={closeType}>
                                                <div className="link-row">
                                                    <Link>{text[`${subcategory.name}`]}</Link>
                                                    {
                                                        subcategory.is_type ? (
                                                            <button onClick={() => toggleType(subcategory.id)} className={activeType === subcategory.id ? 'active' : null}><img src={arrow_right} alt="arrow" /></button>
                                                        ) : null
                                                    }
                                                </div>
                                                {
                                                    subcategory.is_type ? (
                                                        <div className={activeType === subcategory.id ? 'types' : 'types d-none'}>
                                                            {
                                                                subcategory.types.map(type => (
                                                                    <div className="type" key={type.id}>
                                                                        <div className="link-row">
                                                                            <Link>{text[`${type.name}`]}</Link>
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
