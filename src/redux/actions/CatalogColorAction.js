import { SAVE_CATALOG_COLOR, SEND_CATALOG_COLOR } from "../ActionTypes"

export const sendCatalogColor = (color) => {
    return{
        type: SEND_CATALOG_COLOR,
        payload: color,
    }
}

export const saveCatalogColor = (color) => {
    return{
        type: SAVE_CATALOG_COLOR,
        payload: color,
    }
}