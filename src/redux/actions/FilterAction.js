import { SEND_FILTER_PARAMS } from "../ActionTypes"

export const sendFilterParams = (params) => {
    return{
        type: SEND_FILTER_PARAMS,
        payload: params,
    }
} 