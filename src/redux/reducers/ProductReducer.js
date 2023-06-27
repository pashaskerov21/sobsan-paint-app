import { ADD_PRODUCT_TO_COMPARISONS, ADD_PRODUCT_TO_WISHLIST, REMOVE_ALL_PRODUCTS_FROM_COMPARISONS, REMOVE_ALL_PRODUCTS_FROM_WISHLIST, REMOVE_PRODUCT_FROM_COMPARISONS, REMOVE_PRODUCT_FROM_WISHLIST } from "../ActionTypes"

const initialState = {
    comparisonProducts: [],
    wishlistProducts: [],
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
        return{
            ...state,
            wishlistProducts: []
        }
        default:
            return state;
    }
}

export default ProductReducer