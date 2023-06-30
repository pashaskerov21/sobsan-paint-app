import { SAVE_CATALOG_COLOR, SEND_CATALOG_COLOR } from "../ActionTypes"

const initialState = {
    catalogColor: [],
    allCatalogColors: []
}


const CatalogColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_CATALOG_COLOR:
            return {
                ...state,
                catalogColor: action.payload
            }
        case SAVE_CATALOG_COLOR:
            return {
                ...state,
                allCatalogColors: [...state.allCatalogColors, action.payload]
            }
        default:
            return state
    }
}

export default CatalogColorReducer