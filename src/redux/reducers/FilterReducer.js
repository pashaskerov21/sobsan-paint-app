import { SEND_FILTER_PARAMS } from "../ActionTypes"

const initialState = {
    filterParams: [],
}

const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_FILTER_PARAMS:
            return {
                ...state,
                filterParams: [action.payload]
            };
        default:
            return state;
    }
}

export default FilterReducer;