import React from 'react'
import TextTranslate from '../../translate/TextTranslate'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CompareContainer({ products }) {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    return (
        <div className='compare-container'>
            <div className="row main-row">
                <div className="col-3">
                    <div className="parametr-info">
                        <ul className="parametr-list soft">
                            <li className='bgt img-cell'></li>
                            <li><TextTranslate text='Brend:' /></li>
                            <li><TextTranslate text='Məhsulun adı:' /></li>
                            <li><TextTranslate text='Kateqoriya:' /></li>
                            <li><TextTranslate text='Məhsulun kodu:' /></li>
                            <li><TextTranslate text='Qiymət:' /></li>
                            <li className='bgt'></li>
                        </ul>
                        <ul className="parametr-list tech">
                            <li className='bgt'><TextTranslate text='Texniki parametrlər:' /></li>
                            <li><TextTranslate text='Saxlanma müddəti:' /></li>
                            <li><TextTranslate text='Toxunma quruması:' /></li>
                            <li><TextTranslate text='Sərt quruma:' /></li>
                            <li><TextTranslate text='Sərfiyyat:' /></li>
                        </ul>
                    </div>
                </div>
                {
                    products.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product-info">
                                <ul className="parametr-list soft">
                                    <li className='bgt'>
                                        <Link to={`/product/${product.path}`} className="product-image">
                                            <img src={product.img} alt="product" />
                                        </Link>
                                    </li>
                                    <li><span className='brand'>{product.brand}</span></li>
                                    <li><Link to={`/product/${product.path}`} className='name'>{product.name}</Link></li>
                                    <li><span className='category'>{text[`${product.category[0]}`]}</span></li>
                                    <li><span className='code'>{product.code}</span></li>
                                    <li><span className='price'>{product.price.toFixed(2)} AZN</span></li>
                                    <li className='bgt'>
                                        <Link to={`/product/${product.path}`} className='basket-btn'><TextTranslate text='Səbətə at'/></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CompareContainer
