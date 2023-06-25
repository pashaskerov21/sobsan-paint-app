import React, { useState } from 'react'
import CatalogSobmatik from './CatalogSobmatik'
import { colorCatalog } from '../../data/color-catalog/Catalog'
import { useSelector } from 'react-redux';
import loader from '../../image/loader.svg'

function CatalogAccordion() {
  const language = useSelector(state => state.language.language);
  const text = require(`../../lang/${language}.json`);

  const [showLoader, setShowLoader] = useState(false);

  const handleAccordionClick = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  };

  return (
    <div className='accordion' id='catalog-accordion'>
      <CatalogSobmatik />
      {
        colorCatalog.length > 0 ? (
          <>
            {
              colorCatalog.map(catalog => (
                <div className="accordion-item" key={catalog.id}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${catalog.id}`} onClick={() => handleAccordionClick()}>
                      <span>{text[`${catalog.name}`]}</span>
                      <i className='fa-solid fa-chevron-down'></i>
                    </button>
                  </h2>
                  <div id={`collapse-${catalog.id}`} className="accordion-collapse collapse" data-bs-parent="#catalog-accordion">
                    <div className="accordion-body">
                      {
                        showLoader ? (
                          <div className="catalog-loader">
                            <img src={loader} alt="loader" />
                          </div>
                        ) : (
                          <>
                            {
                              catalog.colors.length > 0 ? (
                                <div className="row catalog-row">
                                  {
                                    catalog.colors.map(color => (
                                      <div className="col-4 col-lg-3 col-xl-2" key={color.id}>
                                        <div className="color-item">
                                          <img src={color.img} alt="color" />
                                          <span className='label'>{color.label === 'main-color' ? text['main-color'] : color.label}</span>
                                        </div>
                                      </div>
                                    ))
                                  }
                                </div>
                              ) : null
                            }
                          </>
                        )
                      }
                      <div className="catalog-note">
                        <p>
                          {text['catalog-note']}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </>
        ) : null
      }
    </div>
  )
}

export default CatalogAccordion
