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

    const filterParams = useSelector(state => state.filterParams.filterParams);
    //console.log(filterParams)

    useEffect(() => {

        let filteredProducts = productsArr;
        
        // sonda elave et ---- && filteredProducts.length > 0
        if (filterParams.length > 0 ) {
            // qiymet filteri
            let rangeMin = filterParams[0].rangeMin;
            let rangeMax = filterParams[0].rangeMax;
            if(rangeMax > 0){
                filteredProducts = filteredProducts.filter(
                    (product) => rangeMin <= product.price && product.price <= rangeMax
                );
            }
            // brend filteri
            let selectedBrands = filterParams[0].selectedBrands;
            if(selectedBrands.length > 0){
                
                selectedBrands.forEach((brand) => {
                    const newProducts = filteredProducts.filter((product) => product.brand === brand);
                    filteredProducts.push(...newProducts)
                })
            }

            // xususiyyet filteri
            let selectedFeatures = filterParams[0].selectedFeatures;
            if(selectedFeatures.length > 0){
                filteredProducts = filteredProducts.filter((product) => {
                    return selectedFeatures.some((feature) => product.features.includes(feature));
                });
            }

            // tip filteri
            let selectedTypes = filterParams[0].selectedTypes
            if(selectedTypes.length > 0){
                filteredProducts = filteredProducts.filter((product) => {
                    return selectedTypes.some((type) => product.types.includes(type));
                })
            }
            // tetbiq sahesi filteri
            let selectedApplicationAreas = filterParams[0].selectedApplicationAreas
            if(selectedApplicationAreas.length > 0){
                filteredProducts = filteredProducts.filter((product) => {
                    return selectedApplicationAreas.some((area) => product.application_areas.includes(area))
                })
            }

            // gorunus filteri
            let selectedAppearance = filterParams[0].selectedAppearance
            if(selectedAppearance.length > 0){
                filteredProducts = filteredProducts.filter((product) => {
                    return selectedAppearance.some((appearance) => product.appearance.includes(appearance))
                })
            }

            // quruma filteri
            let selectedDrying = filterParams[0].selectedDrying
            if(selectedDrying.length > 0){
                filteredProducts = filteredProducts.filter((product) => {
                    return selectedDrying.some((drying) => product.drying.includes(drying))
                })
            }

            setProducts(filteredProducts)
        }
        
    }, [filterParams])
    
    //console.log(products.length)

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
                                    <SortFilter />
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
                                                    <ProductCard viewFilter={viewFilter} product={product} />
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
