import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TextTranslate from '../../translate/TextTranslate';
import delete_icon from '../../image/icon/delete-icon.svg'

function SecondarySection({ className, path, rootLink, sectionTitle, children, removeProductsButtonFunc }) {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    return (
        <section className={`${className}-section`}>
            <div className="container">
                <div className="page-title secondary">
                    <div className="left">
                        <div className="root-links d-none d-md-flex">
                            <Link to='/'>{text['home-page']}</Link>
                            <i className="fa-solid fa-chevron-right"></i>
                            <Link to={`/${path}`}><TextTranslate text={rootLink}/></Link>
                        </div>
                        <h2 className="section-title"><TextTranslate text={sectionTitle}/></h2>
                    </div>
                    <div className="right">
                        <div className="remove-products-button" onClick={removeProductsButtonFunc}>
                            <img src={delete_icon} alt="delete-icon" />
                            <span><TextTranslate text='Təmizlə' /></span>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </section>
    )
}

export default SecondarySection
