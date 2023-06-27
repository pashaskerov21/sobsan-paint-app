import React from 'react'
import TextTranslate from '../../../translate/TextTranslate'

function SortFilter() {
  return (
    <div className='sort-filter'>
      <button>
        <span><TextTranslate text={'Qiymətinə görə'}/></span>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <button>
        <span><TextTranslate text={'Adına görə'}/></span>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <button>
        <span><TextTranslate text={'Populyarlığına görə'}/></span>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  )
}

export default SortFilter
