import {createStore, combineReducers, applyMiddleware} from  'redux'
import {productListReducer}from './reducers/productreducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer=combineReducers({
    //this is product list out of state
    productList:productListReducer,
})

const initialState={}
const middleware=[thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store