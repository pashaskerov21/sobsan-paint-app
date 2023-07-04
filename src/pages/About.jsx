import React from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import TextTranslate from '../translate/TextTranslate'
import { aboutContent } from '../data/TextData'

function About() {
  return (
    <PrimarySection className='about' path='about-us' rootLink='Haqqımızda' sectionTitle='Haqqımızda'>
      <div className="text-container">
        {
          aboutContent.map(content => (
            <div className="row" key={content.id}>
              <div className="col-12 col-lg-6">
                <div className="text">
                  <p><TextTranslate text={content.text} /></p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="image">
                  <img src={content.image} alt="about" />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </PrimarySection>
  )
}

export default About
