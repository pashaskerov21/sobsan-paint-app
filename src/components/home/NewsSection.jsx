import React from 'react'
import TextTranslate from '../../translate/TextTranslate'
import NewsSlider from './NewsSlider'

function NewsSection() {
    
    return (
        <section className="news-section">
            <div className="container">
                <h2 className="section-title mb-3"><TextTranslate text='Xəbərlər' /></h2>
                <NewsSlider/>
            </div>
        </section>
    )
}

export default NewsSection
