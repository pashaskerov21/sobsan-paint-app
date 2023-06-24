import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { productCategories } from '../../data/ProductData';
import CategoryList from './CategoryList';
import LeftFIlter from './filter/LeftFIlter';

function ProductSection() {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);

    const filterParams = useSelector(state => state.filterParams.filterParams);
    console.log(filterParams)

    const { categoryName } = useParams();
    const { subcategoryName } = useParams();
    const { typeName } = useParams();

    const category = categoryName !== undefined ? productCategories.find((category) => category.path === categoryName) : 'no-category';
    const subcategory = subcategoryName !== undefined && category !== '' ? category.subcategories.find((subcategory) => subcategory.path === subcategoryName) : 'no-subcategory'
    const type = typeName !== undefined && category !== '' && subcategory !== '' ? subcategory.types.find((type) => type.path === typeName) : 'no-type';
    const [sectionTitle, setSectionTitle] = useState('');
    useEffect(() => {
        if (type !== 'no-type') {
            setSectionTitle(type.name);
        } else if (type === 'no-type' && subcategory !== 'no-subcategory') {
            setSectionTitle(subcategory.name)
        } else if (type === 'no-type' && subcategory === 'no-subcategory') {
            setSectionTitle(category.name);
        } else {
            setSectionTitle('');
        }
    }, [type, subcategory, category]);

    return (
        <section className="products">
            <div className="container">
                <div className="page-title">
                    <div className="root-links d-none d-md-flex">
                        <Link to='/'>{text['home-page']}</Link>
                        {
                            category !== 'no-category' ? (
                                <>
                                    <i className="fa-solid fa-chevron-right"></i>
                                    <Link to={`/${category.path}`}>{text[`${category.name}`]}</Link>
                                </>
                            ) : null
                        }
                        {
                            subcategory !== 'no-subcategory' ? (
                                <>
                                    <i className="fa-solid fa-chevron-right"></i>
                                    <Link to={`/${category.path}/${subcategory.path}`}>{text[`${subcategory.name}`]}</Link>
                                </>
                            ) : null
                        }
                        {
                            type !== 'no-type' ? (
                                <>
                                    <i className="fa-solid fa-chevron-right"></i>
                                    <Link to={`/${category.path}/${subcategory.path}/${type.path}`}>{text[`${type.name}`]}</Link>
                                </>
                            ) : null
                        }
                    </div>
                    <h2 className="section-title">{text[`${sectionTitle}`]}</h2>
                </div>
                {
                    category !== 'no-category' && category.is_cover === true && subcategory === 'no-subcategory' && type === 'no-type' ? (
                        <div className="category-cover">
                            <img src={category.cover_img} alt="category-cover" />
                        </div>
                    ) : null
                }
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <div className="inner">
                            <CategoryList categoryPath={categoryName} subcategoryPath={subcategoryName} typePath={typeName} />
                            <LeftFIlter category={category} subcategory={subcategory} type={type} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductSection
