
import { Actions } from '.';
import * as constants from '../Body/Menu/constants';
import * as ActionTypes from './ActionTypes';

export const populateMenu = (resp: any) => ({
    type: ActionTypes.POPULATE_MENU,
    payload: resp
});

export const updateCart = (cartData: any) => ({
    type: ActionTypes.UPDATE_CART,
    payload: cartData
})

export const updateSorting = (data: String) => ({
    type: ActionTypes.UPDATE_SORTING,
    payload: data
})

export const updateFilter = (data: boolean) => ({
    type: ActionTypes.UPDATE_FILTER,
    payload: data
})