import { ADD_COMPARISONS, ADD_WISHLIST, REMOVE_COMPARISONS, REMOVE_WISHLIST } from "../ActionTypes"

const initialState = {
    comparisonProducts: [],
    wishlistProducts: [],
}


const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPARISONS:
            return {
                ...state,
                comparisonProducts: [...state.comparisonProducts, action.payload]
            }
        case REMOVE_COMPARISONS:
            return {
                ...state,
                comparisonProducts: state.comparisonProducts.filter((product) => product.id !== action.payload)
            }
        case ADD_WISHLIST:
            return {
                ...state,
                wishlistProducts: [...state.wishlistProducts, action.payload]
            }
        case REMOVE_WISHLIST:
            return {
                ...state,
                wishlistProducts: state.wishlistProducts.filter((product) => product.id !== action.payload)
            }
        default:
            return state;
    }
}

export default ProductReducer