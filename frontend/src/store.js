import {createStore, combineReducers, applyMiddleware} from  'redux'
import {productListReducer,productDetailsReducer }from './reducers/productReducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer=combineReducers({
    //This is what shows as piece of state...this is product list out of state
    productList:productListReducer,
    productDetails:productDetailsReducer,
})

const initialState={}
const middleware=[thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store