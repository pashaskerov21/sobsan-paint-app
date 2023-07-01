import { combineReducers } from 'redux';
import languageReducer from './reducers/LanguageReducer';
import ProductReducer from './reducers/ProductReducer';
import FilterParamReducer from './reducers/FilterParamsReducer';
import CatalogColorReducer from './reducers/CatalogColorReducer';
import AccountReducer from './reducers/AccountReducer';

const rootReducer = combineReducers({
    language: languageReducer,
    filterParams: FilterParamReducer,
    productState: ProductReducer,
    colorState: CatalogColorReducer,
    accountState: AccountReducer,
})

export default rootReducer