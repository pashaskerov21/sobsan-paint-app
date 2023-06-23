import { SET_LANGUAGE } from "../ActionTypes"

const initialState = {
    language: 'az',
}

const languageReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        default: 
            return state;
    }
}

export default languageReducer