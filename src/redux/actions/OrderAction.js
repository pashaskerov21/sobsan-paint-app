import { DELETE_ORDER_DATA, SEND_ORDER_DATA } from "../ActionTypes"

export const sendOrderData = (data) => {
    return{
        type: SEND_ORDER_DATA,
        payload: data,
    }
}
export const deleteOrderData = (userID) => {
    return{
        type: DELETE_ORDER_DATA,
        payload: userID,
    }
}