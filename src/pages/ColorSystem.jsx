import React from 'react'
import PrimarySection from '../components/sections/PrimarySection'
import { colorSystemContent } from '../data/TextData'
import TextTranslate from '../translate/TextTranslate'

function ColorSystem() {
  return (
    <PrimarySection className='color-system' path='about-coloring-system' rootLink='Rəngləndirmə Sistemi' sectionTitle='Rəngləndirmə Sistemi'>
      <div className="text-container">
        {
          colorSystemContent.map(content => (
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

export default ColorSystem
