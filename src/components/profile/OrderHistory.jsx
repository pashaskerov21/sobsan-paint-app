import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function OrderHistory() {
  const allOrders = useSelector(state => state.orderState.allOrders);
  const activeUserAccount = useSelector(state => state.accountState.activeUserAccount);

  useEffect(() => {
    //const activeUserOrders = allOrders.filter((order) => order.userID === activeUserAccount.userID);
  }, [allOrders,activeUserAccount])


  return (
    <div>
      order history
    </div>
  )
}

export default OrderHistory
