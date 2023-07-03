import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TextTranslate from '../../translate/TextTranslate';
import { Link } from 'react-router-dom';

function OrderHistory() {
  const allOrders = useSelector(state => state.orderState.allOrders);
  const activeUserAccount = useSelector(state => state.accountState.activeUserAccount);

  const [activeUserOrders, setActiveUserOrders] = useState([]);

  useEffect(() => {
    const orders = allOrders.filter((order) => order.userID === activeUserAccount.userID);
    setActiveUserOrders([...orders])

  }, [allOrders, activeUserAccount])

  console.log(activeUserOrders)

  

  return (
    <>
      {
        activeUserOrders.length > 0 ? (
          <div className='order-list'>
            {
              activeUserOrders.map((order) => (
                <div className="order-component" key={order.orderID}>
                  <div className="product-data">
                    <table>
                      <thead>
                        <tr>
                          <th><TextTranslate text='Foto' /></th>
                          <th><TextTranslate text='Başlıq' /></th>
                          <th><TextTranslate text='Qiymət' /></th>
                          <th><TextTranslate text='Say' /></th>
                          <th><TextTranslate text='Cəmi' /></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          order.orderProducts.map((product) => (
                            <tr key={product.productBasketID}>
                              <td>
                                <div className="td-inner">
                                  <Link to={`/product/${product.path}`} className='product-image'>
                                    <img src={product.img} alt="product" />
                                  </Link>
                                </div>
                              </td>
                              <td>
                                <div className="td-inner">
                                  <div className="product-name">
                                    <Link to={`/product/${product.path}`}>{product.name}</Link>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="td-inner">
                                  <div className="product-price">
                                    <span>{product.price.toFixed(2)} Azn</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="td-inner">
                                  <div className="product-amount">
                                    <span>{product.productBasketAmount}</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="td-inner">
                                  <div className="product-total-price">
                                    <span>{(product.productBasketAmount * product.price).toFixed(2)} Azn</span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                  <div className="user-data">
                    <div className="data-row">
                      <span><TextTranslate text='Sifariş verən şəxs:'/></span>
                      <span>{order.orderFirstName} {order.orderLastName}</span>
                    </div>
                    <div className="data-row">
                      <span><TextTranslate text='Sifarişin verilmə tarixi'/></span>
                      <span>{order.orderDate.toLocaleString()}</span>
                    </div>
                    <div className="data-row">
                      <span><TextTranslate text='Çatdırılma ünvanı'/></span>
                      <span>{order.orderAddress}</span>
                    </div>
                    <div className="data-row">
                      <span><TextTranslate text='Çatdırılma qiyməti'/></span>
                      <span>{order.deliveryPrice.toFixed(2)} AZN</span>
                    </div>
                    <div className="data-row">
                      <span><TextTranslate text='Endirim'/></span>
                      <span>{order.discountPrice.toFixed(2)}</span>
                    </div>
                    <div className="data-row main">
                      <span><TextTranslate text='Ümumi məbləğ'/></span>
                      <span>{order.orderTotalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        ) : (
          <h4 className="alert-text"><TextTranslate text='Sifariş yoxdur' /></h4>
        )
      }
    </>
  )
}

export default OrderHistory
