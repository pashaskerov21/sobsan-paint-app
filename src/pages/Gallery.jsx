import React from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import GalleryContainer from '../components/home/GalleryContainer'

function Gallery() {
  return (
    <PrimarySection className='gallery' path='media/gallery' rootLink='Qalereya' sectionTitle='Qalereya'>
      <GalleryContainer/>
    </PrimarySection>
  )
}

export default Gallery
