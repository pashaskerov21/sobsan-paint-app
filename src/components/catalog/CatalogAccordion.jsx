import React, { useState } from 'react'
import CatalogSobmatik from './CatalogSobmatik'
import { useSelector } from 'react-redux';
import loader from '../../image/loader.svg'
import { Fancybox } from "@fancyapps/ui";
import TextTranslate from '../../translate/TextTranslate';
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

function CatalogAccordion({ catalog, sobmatikStatus }) {
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
      <CatalogSobmatik sobmatikStatus={sobmatikStatus} />
      {
        catalog.length > 0 ? (
          <>
            {
              catalog.map(catalog => (
                <div className="accordion-item" key={catalog.id}>
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${catalog.id}`} onClick={() => handleAccordionClick()}>
                      <span><TextTranslate text={catalog.name}/></span>
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
                                          <a href={color.img} data-fancybox={`gallery-${catalog.name}`}>
                                            <img src={color.img} alt="color" />
                                          </a>
                                          <span className='label'>
                                            <TextTranslate text={color.name}/>
                                          </span>
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
