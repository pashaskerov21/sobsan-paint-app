import { SET_LANGUAGE } from "../ActionTypes"

export const setLanguage = (language) => {
    return {
        type: SET_LANGUAGE,
        payload: language,
    }
}