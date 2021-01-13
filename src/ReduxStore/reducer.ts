import {combineReducers} from 'redux';
import * as ActionTypes from './ActionTypes';
import DATA from '../dummydata';

//cart:[{id:1, toppings:{'t1','t2'}}]
const initialState = {
    data: DATA,
    cart:null,
    sortby: null,
    filterby: null
}

const MainReducer = (state = initialState, action: {type: String, payload: any}) => {    
    switch(action.type){
        case ActionTypes.POPULATE_MENU:
            return {...state, data: action.payload}
        case ActionTypes.UPDATE_CART:
            return {...state, cart: action.payload};
        case ActionTypes.UPDATE_FILTER:
            return {...state, filterby: action.payload}
        case ActionTypes.UPDATE_SORTING:
            return {...state, sortby: action.payload}
        default:
            return state;
    }
}

export const combinedReducer = combineReducers({
    MainReducer
})
