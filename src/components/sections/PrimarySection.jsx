import React from 'react'
import { useSelector } from 'react-redux';
import TextTranslate from '../../translate/TextTranslate';
import { Link } from 'react-router-dom';

function PrimarySection({ className, path,rootLink, sectionTitle, children }) {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`);
    return (
        <section className={`${className}-section`}>
            <div className="container">
                <div className="page-title">
                    <div className="root-links d-none d-md-flex">
                        <Link to='/'>{text['home-page']}</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link to={`/${path}`}><TextTranslate text={rootLink}/></Link>
                    </div>
                    <h2 className="section-title"><TextTranslate text={sectionTitle}/></h2>
                </div>
                {children}
            </div>
        </section>
    )
}

export default PrimarySection
