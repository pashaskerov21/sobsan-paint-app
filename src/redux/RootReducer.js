import { combineReducers } from 'redux';
import languageReducer from './reducers/LanguageReducer';

const rootReducer = combineReducers({
    language: languageReducer,
})

export default rootReducer