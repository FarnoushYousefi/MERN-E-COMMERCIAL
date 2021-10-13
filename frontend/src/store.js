import {createStore, combineReducers, applyMiddleware} from  'redux'
import {productListReducer }from './reducers/productReducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer=combineReducers({
    //This is what shows...this is product list out of state
    productList:productListReducer,
})

const initialState={}
const middleware=[thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store