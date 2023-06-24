import React from 'react'
import { useParams } from 'react-router-dom'

function Products() {
    const {categoryName} = useParams();
    const {subcategoryName} = useParams();
    const {typeName} = useParams();
  return (
    <div>
      {categoryName}<br/>
      {subcategoryName}<br/>
      {typeName}<br/>
    </div>
  )
}

export default Products
