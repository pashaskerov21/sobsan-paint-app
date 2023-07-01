import { DELETE_ORDER_DATA, SEND_ORDER_DATA } from "../ActionTypes"

const initialState = {
    allOrders: []
}


const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_ORDER_DATA:
            return {
                ...state,
                allOrders: [...state.allOrders, action.payload],
            }
        case DELETE_ORDER_DATA:
            return {
                ...state,
                allOrders: [...state.allOrders.filter((order) => order.userID !== action.payload)]
            }
        default:
            return state;
    }
}

export default OrderReducer