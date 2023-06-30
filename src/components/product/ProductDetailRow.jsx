import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import TextTranslate from '../../translate/TextTranslate';
import ProductDetailForm from './ProductDetailForm';

function ProductDetailRow({ product }) {
  const language = useSelector(state => state.language.language)
  const text = require(`../../lang/${language}.json`);
  const [categoryNames, setCategoryNames] = useState([]);
  const [parametStatus, setParametrStatus] = useState(false)
  useEffect(() => {
    if (product?.altcategory.length > 0) {
      setCategoryNames([...product?.altcategory])
    } else if (product?.altcategory.length === 0 && product?.subcategory.length > 0) {
      setCategoryNames([...product?.subcategory])
    } else if (product?.altcategory.length === 0 && product?.subcategory.length === 0 && product?.category.length > 0) {
      setCategoryNames([...product?.category])
    }
    if (product?.features.length > 0 || product?.types.length > 0 || product?.application_areas.length > 0 || product?.appearance.length > 0 || product?.drying.length > 0) {
      setParametrStatus(true)
    } else {
      setParametrStatus(false)
    }
  }, [product])

  const [productTextStatus, setProductTextStatus] = useState('')
  const handleTextButton = (value) => setProductTextStatus(value)

  return (
    <div className='row product-detail-row'>
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="inner pe-lg-4">
          <div className="product-info">
            {
              product?.brand !== '' ? (
                <div className="row">
                  <div className="col-6">
                    <span className="label"><TextTranslate text='Brend:' /></span>
                  </div>
                  <div className="col-6">
                    <span className='value'>{product?.brand}</span>
                  </div>
                </div>
              ) : null
            }
            {
              categoryNames.length > 0 ? (
                categoryNames.map((name, index) => (
                  <div className="row" key={index}>
                    <div className="col-6">
                      <span className="label"><TextTranslate text='Kateqoriya:' /></span>
                    </div>
                    <div className="col-6">
                      <span className='value'>{text[`${name}`]}</span>
                    </div>
                  </div>
                ))
              ) : null
            }
            {
              product?.code !== '' ? (
                <div className="row">
                  <div className="col-6">
                    <span className="label"><TextTranslate text='Məhsulun kodu:' /></span>
                  </div>
                  <div className="col-6">
                    <span className='value'>{product?.code}</span>
                  </div>
                </div>
              ) : null
            }
            {
              parametStatus ? (
                <>
                  <h5 className="title"><TextTranslate text='Texniki parametrlər' /></h5>
                  {
                    product?.features.length > 0 ? (
                      product?.features.map((param, index) => (
                        <div className="row" key={index}>
                          <div className="col-6">
                            <span className="label"><TextTranslate text='Xüsusiyyətləri:' /></span>
                          </div>
                          <div className="col-6">
                            <span className='value'>{text[`${param}`]}</span>
                          </div>
                        </div>
                      ))
                    ) : null
                  }
                  {
                    product?.types.length > 0 ? (
                      product?.types.map((param, index) => (
                        <div className="row" key={index}>
                          <div className="col-6">
                            <span className="label"><TextTranslate text='Tipi:' /></span>
                          </div>
                          <div className="col-6">
                            <span className='value'>{text[`${param}`]}</span>
                          </div>
                        </div>
                      ))
                    ) : null
                  }
                  {
                    product?.application_areas.length > 0 ? (
                      product?.application_areas.map((param, index) => (
                        <div className="row" key={index}>
                          <div className="col-6">
                            <span className="label"><TextTranslate text='Tətbiq sahələri:' /></span>
                          </div>
                          <div className="col-6">
                            <span className='value'>{text[`${param}`]}</span>
                          </div>
                        </div>
                      ))
                    ) : null
                  }
                  {
                    product?.appearance.length > 0 ? (
                      product?.appearance.map((param, index) => (
                        <div className="row" key={index}>
                          <div className="col-6">
                            <span className="label"><TextTranslate text='Görünüş:' /></span>
                          </div>
                          <div className="col-6">
                            <span className='value'>{text[`${param}`]}</span>
                          </div>
                        </div>
                      ))
                    ) : null
                  }
                  {
                    product?.drying.length > 0 ? (
                      product?.drying.map((param, index) => (
                        <div className="row" key={index}>
                          <div className="col-6">
                            <span className="label"><TextTranslate text='Quruma:' /></span>
                          </div>
                          <div className="col-6">
                            <span className='value'>{text[`${param}`]}</span>
                          </div>
                        </div>
                      ))
                    ) : null
                  }
                </>
              ) : null
            }
          </div>
          <ProductDetailForm product={product} />
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl-5">
        <div className="product-image">
          <img src={product?.img} alt="product" />
        </div>
      </div>
      {
        product?.textStatus ? (
          <div className="col-12">
            <div className="inner">
              <div className="text-buttons">
                <button className={`text-button ${productTextStatus === 'about' ? 'active' : null}`} onClick={() => handleTextButton('about')}>
                  <TextTranslate text='Məhsul haqqında' />
                </button>
                <button className={`text-button ${productTextStatus === 'properties' ? 'active' : null}`} onClick={() => handleTextButton('properties')}>
                  <TextTranslate text='Xüsusiyyətləri' />
                </button>
                <button className={`text-button ${productTextStatus === 'application_areas' ? 'active' : null}`} onClick={() => handleTextButton('application_areas')}>
                  <TextTranslate text='İstifadə sahələri' />
                </button>
                <button className={`text-button ${productTextStatus === 'application' ? 'active' : null}`} onClick={() => handleTextButton('application')}>
                  <TextTranslate text='Tətbiqi' />
                </button>
                <button className={`text-button ${productTextStatus === 'consumption' ? 'active' : null}`} onClick={() => handleTextButton('consumption')}>
                  <TextTranslate text='Sərfiyyat' />
                </button>
                <button className={`text-button ${productTextStatus === 'storage' ? 'active' : null}`} onClick={() => handleTextButton('storage')}>
                  <TextTranslate text='Saxlama müddəti' />
                </button>
                <button className={`text-button ${productTextStatus === 'safety' ? 'active' : null}`} onClick={() => handleTextButton('safety')}>
                  <TextTranslate text='Təhlükəsizlik şərtləri' />
                </button>
                <button className={`text-button ${productTextStatus === 'note' ? 'active' : null}`} onClick={() => handleTextButton('note')}>
                  <TextTranslate text='Qeyd' />
                </button>
              </div>
              {
                productTextStatus !== '' ? (
                  productTextStatus === 'safety' && product?.text.safety.length > 0 ? (
                    <div className="product-text">
                      <ul>
                        {
                          product?.text.safety.map((text, index) => (
                            <li key={index}><TextTranslate text={text} /></li>
                          ))
                        }
                      </ul>
                    </div>
                  ) : (
                    <div className="product-text">
                      <p>
                        <TextTranslate text={product?.text[productTextStatus]} />
                      </p>
                    </div>
                  )
                ) : null
              }
            </div>
          </div>
        ) : null
      }
    </div>
  )
}

export default ProductDetailRow
