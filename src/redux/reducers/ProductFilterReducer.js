import { productsArr } from "../../data/ProductData";
import { FILTER_BY_ALTCATEGORY, FILTER_BY_CATEGORY, FILTER_BY_SUBCATEGORY, FILTER_PRODUCTS_BY_ALTCATEGORY, FILTER_PRODUCTS_BY_CATEGORY, FILTER_PRODUCTS_BY_SUBCATEGORY } from "../ActionTypes"

const initialState = {
    products: [...productsArr]
}

const ProductFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                products: state.products.filter((product) =>
                    product.category.includes(action.payload)
                ),
            };
        case FILTER_BY_SUBCATEGORY:
            return {
                ...state,
                products: state.products.filter((product) =>
                    product.subcategory.includes(action.payload)
                ),
            };
        case FILTER_BY_ALTCATEGORY:
            return {
                ...state,
                products: state.products.filter((product) =>
                    product.altcategory.includes(action.payload)
                ),
            };
        default:
            return state;
    }
}

export default ProductFilterReducer