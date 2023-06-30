import React from 'react'
import TextTranslate from '../translate/TextTranslate'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <section>
      <div className="container">
        <div className="no-page-info">
          <span className='numb'>404</span>
          <span className='label'><TextTranslate text='Səhifə tapılmadı'/></span>
          <Link to='/'><TextTranslate text='Əsas səhifə'/></Link>
        </div>
      </div>
    </section>
  )
}

export default NoPage
