import React, { useState } from 'react'
import { catalogSobmatik } from '../../data/color-catalog/Sobmatik'
import { useSelector } from 'react-redux';
import loader from '../../image/loader.svg'
import TextTranslate from '../../translate/TextTranslate';



function CatalogSobmatik({sobmatikStatus}) {
    const language = useSelector(state => state.language.language);
    const text = require(`../../lang/${language}.json`);

    const [activeShadeGroup, setActiveShadeGroup] = useState('no-group');
    const changeShadeGroup = (id) => {
        if (activeShadeGroup === id) {
            setActiveShadeGroup('no-group');
        } else {
            setActiveShadeGroup(id)
        }
    }

    const [showLoader, setShowLoader] = useState(false);

    const handleAccordionClick = () => {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 1000);
    };

    return (
        <div className={`accordion-item ${sobmatikStatus ? '' : 'd-none'}`}>
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#catalog-collapse-1" onClick={() => handleAccordionClick()}>
                    <span>{text[`${catalogSobmatik.name}`]}</span>
                    <i className='fa-solid fa-chevron-down'></i>
                </button>
            </h2>
            <div id='catalog-collapse-1' className="accordion-collapse collapse" data-bs-parent="#catalog-accordion">
                <div className="accordion-body">
                    {
                        showLoader ? (
                            <div className="catalog-loader">
                                <img src={loader} alt="loader" />
                            </div>
                        ) : (
                            <div className="color-buttons-grid">
                                {
                                    catalogSobmatik.colors.map(color => (
                                        <React.Fragment key={color.id}>
                                            <div className="grid-item" >
                                                <div className="color-button" onClick={() => changeShadeGroup(color.id)}>
                                                    <div className="color" style={{ backgroundColor: `${color.hexCode}` }}></div>
                                                    <div className="info">
                                                        <span className="name"><TextTranslate text={color.name}/></span>
                                                        <span className='code'>{color.code}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                color.shades.length > 0 ? (
                                                    <div className={activeShadeGroup === color.id ? 'color-subpanel' : 'color-subpanel d-none'}>
                                                        <div className="row">
                                                            {
                                                                color.shades.map(shade => (
                                                                    <div className="col-3" key={shade.id}>
                                                                        <div className="color-button">
                                                                            <div className="color" style={{ backgroundColor: `${shade.hexCode}` }}></div>
                                                                            <div className="info">
                                                                                <span className='code'>{shade.name}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                ) : null
                                            }
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                        )
                    }
                    <div className="catalog-note">
                        <p>
                            {text['catalog-note']}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CatalogSobmatik
