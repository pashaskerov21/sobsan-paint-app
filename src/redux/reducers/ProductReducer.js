import { ADD_PRODUCT_TO_BASKET, ADD_PRODUCT_TO_COMPARISONS, ADD_PRODUCT_TO_WISHLIST, DECREASE_BASKET_PRODUCT_AMOUNT, INCREASE_BASKET_PRODUCT_AMOUNT, REMOVE_ALL_PRODUCTS_FROM_BASKET, REMOVE_ALL_PRODUCTS_FROM_COMPARISONS, REMOVE_ALL_PRODUCTS_FROM_WISHLIST, REMOVE_PRODUCT_FROM_BASKET, REMOVE_PRODUCT_FROM_COMPARISONS, REMOVE_PRODUCT_FROM_WISHLIST, SEARCH_PRODUCTS, SEND_BASKET_TOTAL, SET_BASKET_PRODUCT_AMOUNT, UPDATE_BASKET_PRODUCTS, UPDATE_COMPARE_PRODUCTS, UPDATE_WISHLIST_PRODUCTS } from "../ActionTypes"

const initialState = {
    comparisonProducts: [],
    wishlistProducts: [],
    basketProducts: [],
    searchProducts: [],
    basketTotal: 0,
}


const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_COMPARISONS:
            return {
                ...state,
                comparisonProducts: [...state.comparisonProducts, action.payload]
            }
        case REMOVE_PRODUCT_FROM_COMPARISONS:
            return {
                ...state,
                comparisonProducts: state.comparisonProducts.filter((product) => product.id !== action.payload)
            }
        case REMOVE_ALL_PRODUCTS_FROM_COMPARISONS:
            return {
                ...state,
                comparisonProducts: []
            }
        case UPDATE_COMPARE_PRODUCTS:
            return {
                ...state,
                comparisonProducts: [...action.payload]
            }
        case ADD_PRODUCT_TO_WISHLIST:
            return {
                ...state,
                wishlistProducts: [...state.wishlistProducts, action.payload]
            }
        case REMOVE_PRODUCT_FROM_WISHLIST:
            return {
                ...state,
                wishlistProducts: state.wishlistProducts.filter((product) => product.id !== action.payload)
            }
        case REMOVE_ALL_PRODUCTS_FROM_WISHLIST:
            return {
                ...state,
                wishlistProducts: []
            }
        case UPDATE_WISHLIST_PRODUCTS:
            return {
                ...state,
                wishlistProducts: [...action.payload]
            }
        case ADD_PRODUCT_TO_BASKET:
            return {
                ...state,
                basketProducts: [...state.basketProducts, action.payload]
            }
        case REMOVE_PRODUCT_FROM_BASKET:
            return {
                ...state,
                basketProducts: [...state.basketProducts.filter((product) => product.productBasketID !== action.payload)]
            }
        case REMOVE_ALL_PRODUCTS_FROM_BASKET:
            return {
                ...state,
                basketProducts: []
            }
        case UPDATE_BASKET_PRODUCTS:
            return {
                ...state,
                basketProducts: [...action.payload]
            }
        case INCREASE_BASKET_PRODUCT_AMOUNT:
            return {
                ...state,
                basketProducts: state.basketProducts.map((product) => {
                    if (product.productBasketID === action.payload) {
                        return {
                            ...product,
                            productBasketAmount: product.productBasketAmount + 1
                        }
                    }
                    return product;
                })
            }
        case DECREASE_BASKET_PRODUCT_AMOUNT:
            return {
                ...state,
                basketProducts: state.basketProducts.map((product) => {
                    if (product.productBasketID === action.payload) {
                        return {
                            ...product,
                            productBasketAmount: product.productBasketAmount > 1 ? product.productBasketAmount - 1 : 1
                        }
                    }
                    return product
                })
            }
        case SET_BASKET_PRODUCT_AMOUNT:
            return {
                ...state,
                basketProducts: state.basketProducts.map((product) => {
                    if (product.productBasketID === action.payload[0]) {
                        return {
                            ...product,
                            productBasketAmount: action.payload[1] > 1 ? action.payload[1] : 1
                        }
                    }
                    return product;
                })
            }
        case SEND_BASKET_TOTAL:
            return {
                ...state,
                basketTotal: action.payload
            }
        case SEARCH_PRODUCTS:
            return {
                ...state,
                searchProducts: [...action.payload]
            }
        default:
            return state;
    }
}

export default ProductReducer