import React from 'react'
import { useDispatch } from 'react-redux';
import { removeAllProductsFromBasket } from '../redux/actions/ProductAction';
import BasketTable from '../components/basket/BasketTable';
import SecondarySection from '../components/sections/SecondarySection';


function Basket() {
  
  const dispatch = useDispatch()

  const handleRemoveProductsButton = () => {
    dispatch(removeAllProductsFromBasket());
  }
  return (
    <SecondarySection className='basket' path='basket' rootLink='Səbət' sectionTitle='Səbət' removeProductsButtonFunc={handleRemoveProductsButton}>
      <BasketTable />
    </SecondarySection>
  )
}

export default Basket
