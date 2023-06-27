import React from 'react'
import TextTranslate from '../../../translate/TextTranslate'

function SortFilter({handleSortFilterButton}) {
  return (
    <div className='sort-filter'>
      <button onClick={() => handleSortFilterButton('price')}>
        <span><TextTranslate text={'Qiymətinə görə'}/></span>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <button onClick={() => handleSortFilterButton('name')}>
        <span><TextTranslate text={'Adına görə'}/></span>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      <button onClick={() => handleSortFilterButton('popular')}>
        <span><TextTranslate text={'Populyarlığına görə'}/></span>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  )
}

export default SortFilter
