import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { productsArr } from '../../data/ProductData'
import { useDispatch } from 'react-redux';
import { sendSearchProducts } from '../../redux/actions/ProductAction';

function Search({showSearch, toggleSearch}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchInputValue, setSearchInputValue] = useState('');
    const handleSeacrhFormSubmit = (e) => {
        e.preventDefault()
        toggleSearch()
        navigate('/search');
        let products = productsArr.slice();
        let searchProducts = products.filter((product) => product.name.toLowerCase().includes(searchInputValue))
        dispatch(sendSearchProducts(searchProducts))
    }
  return (
    <>
    <div className={`search-backdrop ${showSearch ? 'active' : 'd-none'}`} onClick={() => toggleSearch()}></div>
    <div className={`search-offcanvas ${showSearch ? 'active' : ''}`}>
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <form onSubmit={handleSeacrhFormSubmit}>
                        <input type="text" placeholder='Axtar' onChange={(e) => setSearchInputValue(e.target.value)}  />
                        <button type='submit'><i className='fa-solid fa-magnifying-glass'></i></button>
                    </form>
                </div>
                <div className="col-2">
                    <button onClick={() => toggleSearch()}  className='close-button'><i className='fa-solid fa-xmark'></i></button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Search
