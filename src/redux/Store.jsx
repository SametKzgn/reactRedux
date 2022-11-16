
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import weatherReducers from "./reducers/weatherReducers";


const rootReducer = combineReducers({
    weatherr: weatherReducers,
}), store=createStore(rootReducer,applyMiddleware(thunk));

export default store;



