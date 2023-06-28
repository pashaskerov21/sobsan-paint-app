import { combineReducers } from 'redux';
import languageReducer from './reducers/LanguageReducer';
import ProductReducer from './reducers/ProductReducer';
import FilterParamReducer from './reducers/FilterParamsReducer';

const rootReducer = combineReducers({
    language: languageReducer,
    filterParams: FilterParamReducer,
    productState: ProductReducer,
})

export default rootReducer