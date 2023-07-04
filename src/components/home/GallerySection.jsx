import React from 'react'
import TextTranslate from '../../translate/TextTranslate'
import GalleryContainer from './GalleryContainer'

function GallerySection() {
  return (
    <section className="gallery-section">
        <div className="container">
            <h2 className="section-title mb-3"><TextTranslate text='Qalereya'/></h2>
            <GalleryContainer/>
        </div>
    </section>
  )
}

export default GallerySection
