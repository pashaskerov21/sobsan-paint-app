import React from 'react'
import BannerSection from '../components/home/BannerSection'
import BannerAddSection from '../components/home/BannerAddSection'
import PopularProducts from '../components/home/PopularProducts'
import RoomSection from '../components/home/RoomSection'
import NewsSection from '../components/home/NewsSection'
import GallerySection from '../components/home/GallerySection'


function Home() {

  return (
    <>
      <BannerSection/>
      <BannerAddSection/>
      <PopularProducts/>
      <RoomSection/>
      <NewsSection/>
      <GallerySection/>
    </>
  )
}

export default Home
