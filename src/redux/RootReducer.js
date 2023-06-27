import { combineReducers } from 'redux';
import languageReducer from './reducers/LanguageReducer';
import FilterReducer from './reducers/FilterReducer';
import ProductReducer from './reducers/ProductReducer';

const rootReducer = combineReducers({
    language: languageReducer,
    filterParams: FilterReducer,
    productState: ProductReducer,
})

export default rootReducer