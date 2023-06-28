import React, { useState } from 'react'
import TextTranslate from '../../translate/TextTranslate'
import CatalogModal from '../catalog/CatalogModal'

function ProductDetailForm({ product }) {
    const [selectedWeight, setSelectedWeight] = useState(product.weight[0])
    const [selectedCustomColor, setSelectedCustomColor] = useState('');
    const [selectedModalCatalogColor, setSelectedModalCatalogColor] = useState()
    console.log(selectedModalCatalogColor)
    return (
        <form className='product-detail-form'>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    {
                        product.weight.length > 0 ? (
                            <>
                                <h5 className="title"><TextTranslate text='Çəkini seç' /></h5>
                                <div className="checkbox-buttons">
                                    {
                                        product.weight.map((param, index) => (
                                            <div className={`checkbox-button ${selectedWeight === param ? 'active' : null}`} key={index}>
                                                <label htmlFor={`checkbox-${index}`}><TextTranslate text={param} /></label>
                                                <input type="checkbox" id={`checkbox-${index}`} value={param} onChange={(e) => setSelectedWeight(e.target.value)} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        ) : null
                    }
                </div>
                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <div className="product-color-wrapper">
                        {
                            product.colorStatus !== 'no-color' ? (
                                product.colorStatus === 'custom' ? (
                                    <>
                                        <h5 className="title"><TextTranslate text='Rəngi seç' /></h5>
                                        {
                                            product.colors.length > 0 ? (
                                                <div className="color-checkboxes">
                                                    {
                                                        product.colors.map(color => (
                                                            <div className={`color-checkbox ${selectedCustomColor === color.name ? 'active' : null}`} key={color.id}>
                                                                <input type="checkbox" value={color.name} onChange={(e) => setSelectedCustomColor(e.target.value)} />
                                                                <div className="color" style={{ borderColor: `${selectedCustomColor === color.name ? selectedCustomColor !== 'Bəyaz' ? `${color.hexCode}` : '#212121' : 'transparent'}` }}>
                                                                    <span style={{ backgroundColor: `${color.hexCode}` }}></span>
                                                                </div>
                                                                <div className="name"><TextTranslate text={color.name} /></div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            ) : null
                                        }
                                    </>
                                ) : (
                                    <>
                                        <CatalogModal product={product} setSelectedModalCatalogColor={setSelectedModalCatalogColor} />
                                    </>
                                )
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ProductDetailForm
