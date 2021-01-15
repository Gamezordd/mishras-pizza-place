import * as ActionTypes from './ActionTypes';
import DATA from '../dummydata';

//cart:[{id:1, toppings:{'t1','t2'}}]
const initialState = {
    data: DATA,
    cart: [],
    sortby: null,
    filterby: null
}

interface IState{
    cart: any[],
}

const MainReducer = (state: IState = initialState, action: {type: String, payload: any}) => {    
    switch(action.type){
        case ActionTypes.POPULATE_MENU:
            return {...state, data: action.payload}
        case ActionTypes.ADDTO_CART:{
            const {count} = action.payload;
            if(count > 0){
                let temp = state.cart.concat(action.payload);
                console.log(temp);
                
                return {...state, cart: temp};
            }

            return state;
        }
        case ActionTypes.REMOVE_FROM_CART:{
            let temp = state.cart.filter(pza => pza.id != action.payload);
            return {...state, cart: temp};
        }
        case ActionTypes.UPDATE_FILTER:
            return {...state, filterby: action.payload};
        case ActionTypes.UPDATE_SORTING:
            return {...state, sortby: action.payload};
        default:
            return state;
    }
}

//combineReducers can be used below
export const combinedReducer = MainReducer;
