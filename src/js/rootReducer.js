import { combineReducers } from 'redux';
import searchReducer from './containers/Search/searchReducer';
import detailReducer from './containers/Detail/detailReducer';

//var temp = (store = {}) => store;
const rootReducer = combineReducers({
    search: searchReducer,
    detail: detailReducer
});

export default rootReducer;