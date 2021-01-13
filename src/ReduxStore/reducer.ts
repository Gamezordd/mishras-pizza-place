import {combineReducers} from 'redux';
import * as ActionTypes from './ActionTypes';

const initialState = {
    data: null
}

const MainReducer = (state = initialState, action: any) => {
    switch(action.type){
        case ActionTypes.POPULATE_MENU:{
            console.log("load: ", action.payload);
            
            return{...state, data: action.payload}
        }
        default:
            return state;
    }
}

export const combinedReducer = combineReducers({
    storeData: MainReducer
})
