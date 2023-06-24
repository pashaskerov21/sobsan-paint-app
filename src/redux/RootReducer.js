import { combineReducers } from 'redux';
import languageReducer from './reducers/LanguageReducer';
import FilterReducer from './reducers/FilterReducer';

const rootReducer = combineReducers({
    language: languageReducer,
    filterParams: FilterReducer,
})

export default rootReducer