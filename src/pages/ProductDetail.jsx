import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productCategories, productsArr } from '../data/ProductData';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToComparisons, addProductToWishlist, removeProductFromComparisons, removeProductFromWishlist } from '../redux/actions/ProductAction';
import ProductDetailRow from '../components/product/ProductDetailRow';


function ProductDetail() {
  const language = useSelector(state => state.language.language)
  const text = require(`../lang/${language}.json`);

  const { productPath } = useParams();
  const product = productsArr.find((product) => product.path === productPath);

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [altcategories, setAltcategories] = useState([]);
  useEffect(() => {
    if (product.category.length > 0) {
      let filteredCategories = [];
      product.category.forEach((categoryName) => {
        let newCategories = productCategories.filter((category) => category.name === categoryName);
        filteredCategories.push(...newCategories)
      })
      setCategories(filteredCategories)
    }
    if (product.subcategory.length > 0) {
      let filteredSubcategories = [];
      product.subcategory.forEach((subcategoryName) => {
        productCategories.forEach((category) => {
          let newSubcategories = category.subcategories.filter((subcategory) => subcategory.name === subcategoryName);
          filteredSubcategories.push(...newSubcategories)
        })

      })
      setSubcategories(filteredSubcategories)
    }
    if (product.altcategory.length > 0) {
      let filteredAltCategories = [];
      product.altcategory.forEach((altcategoryName) => {
        productCategories.forEach((category) => {
          category.subcategories.forEach((subcategory) => {
            let newAltcategories = subcategory.altcategories.filter((altcategory) => altcategory.name === altcategoryName);
            filteredAltCategories.push(...newAltcategories)
          })
        })
      })
      setAltcategories(filteredAltCategories)
    }
  }, [product])



  // product settings
  const dispatch = useDispatch();
  const comparisonProducts = useSelector(state => state.productState.comparisonProducts);
  const productCompareStatus = comparisonProducts.find((p) => p.id === product.id);
  const handleCompareButton = () => {
    if (productCompareStatus) {
      dispatch(removeProductFromComparisons(product.id))
    } else {
      dispatch(addProductToComparisons(product))
    }
  }

  const wishlistProducts = useSelector(state => state.productState.wishlistProducts);
  const productWishlistStatus = wishlistProducts.find((p) => p.id === product.id);
  const handleHeartButton = () => {
    if (productWishlistStatus) {
      dispatch(removeProductFromWishlist(product.id));
    } else {
      dispatch(addProductToWishlist(product))
    }
  }

  return (
    <section className='product-detail'>
      <div className="container">
        <div className="page-title secondary">
          <div className="left">
            <div className="root-links d-none d-lg-flex">
              <Link to='/'>{text['home-page']}</Link>
              {
                categories.length > 0 ? (
                  categories.map(category => (
                    <React.Fragment key={category.id}>
                      <i className="fa-solid fa-chevron-right"></i>
                      <Link to={`/${category.path}`}>{text[`${category.name}`]}</Link>
                    </React.Fragment>
                  ))
                ) : null
              }
              {
                subcategories.length > 0 ? (
                  subcategories.map(subcategory => (
                    <React.Fragment key={subcategory.id}>
                      <i className="fa-solid fa-chevron-right"></i>
                      <Link to={`/${subcategory.categoryPath}/${subcategory.path}`}>{text[`${subcategory.name}`]}</Link>
                    </React.Fragment>
                  ))
                ) : null
              }
              {
                altcategories.length > 0 ? (
                  altcategories.map(altcategory => (
                    <React.Fragment key={altcategory.id}>
                      <i className="fa-solid fa-chevron-right"></i>
                      <Link to={`/${altcategory.categoryPath}/${altcategory.subcategoryPath}/${altcategory.path}`}>{text[`${altcategory.name}`]}</Link>
                    </React.Fragment>
                  ))
                ) : null
              }
              <i className="fa-solid fa-chevron-right"></i>
              <Link to={`/product/${product.path}`}>{product.name}</Link>
            </div>
            <h2 className="section-title">{product.name}</h2>
          </div>
          <div className="right">
            <div className="product-icons">
              <button className={productCompareStatus ? 'active' : ''} onClick={handleCompareButton}>
                <i className="fa-solid fa-scale-balanced"></i>
              </button>
              <button className={productWishlistStatus ? 'active' : ''} onClick={handleHeartButton}>
                <i className={`${productWishlistStatus ? 'fa-solid' : 'fa-regular'} fa-heart`}></i>
              </button>
            </div>
          </div>
        </div>
        <ProductDetailRow product={product}/>
      </div>
    </section>
  )
}

export default ProductDetail
