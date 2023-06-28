import React from 'react'

function Pagination({ totalProducts, productsPerPage, currentPage, onPageChange, prev, next }) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <ul className='product-pagination'>
        <li>
            <button onClick={prev}><i className='fa-solid fa-chevron-left'></i></button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button className={currentPage === number ? 'active' : ''} onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
        <li>
            <button onClick={next}><i className='fa-solid fa-chevron-right'></i></button>
        </li>
      </ul>
    );
  }

export default Pagination
