import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { productCategories, productsArr } from '../../data/ProductData';
import CategoryList from './CategoryList';
import LeftFIlter from './filter/LeftFIlter';
import SortFilter from './filter/SortFilter';
import ProductCard from './ProductCard';

function ProductSection() {
    const language = useSelector(state => state.language.language);
    const text = require(`../../lang/${language}.json`);

    //const filterParams = useSelector(state => state.filterParams.filterParams);
    //console.log(filterParams)

    const { categoryName } = useParams();
    const { subcategoryName } = useParams();
    const { altcategoryName } = useParams();

    const category = categoryName !== undefined ? productCategories.find((category) => category.path === categoryName) : 'no-category';
    const subcategory = subcategoryName !== undefined && category !== '' ? category.subcategories.find((subcategory) => subcategory.path === subcategoryName) : 'no-subcategory'
    const altcategory = altcategoryName !== undefined && category !== '' && subcategory !== '' ? subcategory.altcategories.find((altcategory) => altcategory.path === altcategoryName) : 'no-altcategory';
    const [sectionTitle, setSectionTitle] = useState('');
    useEffect(() => {
        if (altcategory !== 'no-altcategory') {
            setSectionTitle(altcategory.name);
        } else if (altcategory === 'no-altcategory' && subcategory !== 'no-subcategory') {
            setSectionTitle(subcategory.name)
        } else if (altcategory === 'no-altcategory' && subcategory === 'no-subcategory') {
            setSectionTitle(category.name);
        } else {
            setSectionTitle('');
        }
    }, [altcategory, subcategory, category]);


    // view filter
    const [viewFilter, setViewFilter] = useState('grid');
    const handleListFilter = () => {
        setViewFilter('list')
    }
    const handleGridFilter = () => {
        setViewFilter('grid')
    }


    // products
    const [products, setProducts] = useState([...productsArr])

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
                            altcategory !== 'no-altcategory' ? (
                                <>
                                    <i className="fa-solid fa-chevron-right"></i>
                                    <Link to={`/${category.path}/${subcategory.path}/${altcategory.path}`}>{text[`${altcategory.name}`]}</Link>
                                </>
                            ) : null
                        }
                    </div>
                    <h2 className="section-title">{text[`${sectionTitle}`]}</h2>
                </div>
                {
                    category !== 'no-category' && category.is_cover === true && subcategory === 'no-subcategory' && altcategory === 'no-altcategory' ? (
                        <div className="category-cover">
                            <img src={category.cover_img} alt="category-cover" />
                        </div>
                    ) : null
                }
                <div className="row general-row">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <div className="left">
                            <CategoryList categoryPath={categoryName} subcategoryPath={subcategoryName} altcategoryPath={altcategoryName} />
                            <LeftFIlter category={category} subcategory={subcategory} altcategory={altcategory} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9 ps-lg-4">
                        <div className="row right">
                            <div className="col-12">
                                <div className="filter-nav">
                                    <SortFilter/>
                                    <div className="view-filter-buttons">
                                        <button onClick={handleListFilter} className={viewFilter === 'list' ? 'active' : ''}><i className="fa-solid fa-list"></i></button>
                                        <button onClick={handleGridFilter} className={viewFilter === 'grid' ? 'active' : ''}><i className="fa-solid fa-table-cells-large"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 p-0">
                                <div className="row products-row">
                                    {
                                        products.length > 0 ? (
                                            products.map(product => (
                                                <div className={viewFilter === 'list' ? 'col-12 list-item' : 'col-12 col-md-6 col-xl-4'} key={product.id}>
                                                    <ProductCard viewFilter={viewFilter} product={product}/>
                                                </div>
                                            ))
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductSection
