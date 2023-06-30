import { combineReducers } from 'redux';
import languageReducer from './reducers/LanguageReducer';
import ProductReducer from './reducers/ProductReducer';
import FilterParamReducer from './reducers/FilterParamsReducer';
import CatalogColorReducer from './reducers/CatalogColorReducer';

const rootReducer = combineReducers({
    language: languageReducer,
    filterParams: FilterParamReducer,
    productState: ProductReducer,
    colorState: CatalogColorReducer,
})

export default rootReducer