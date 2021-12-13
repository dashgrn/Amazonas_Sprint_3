import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { prodAdmReducer } from '../reducers/prodAdmReducer'
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { prodReducer } from '../reducers/prodReducer';
import { locationReducer } from '../reducers/locationReducer'

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    product: prodAdmReducer,
    productList: prodReducer,
    login: loginReducer,
    register: registerReducer,
    location: locationReducer
    
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)