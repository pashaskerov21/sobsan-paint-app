import React from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import NewsSlider from '../components/home/NewsSlider'

function News() {
  return (
    <PrimarySection className='news' path='media/news' rootLink='Xəbərlər' sectionTitle='Xəbərlər'>
      <NewsSlider/>
    </PrimarySection>
  )
}

export default News
