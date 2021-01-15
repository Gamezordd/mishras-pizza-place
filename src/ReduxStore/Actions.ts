
import { Actions } from '.';
import * as constants from '../Body/Menu/constants';
import * as ActionTypes from './ActionTypes';

export const populateMenu = (resp: any) => ({
    type: ActionTypes.POPULATE_MENU,
    payload: resp
});

export const addToCart = (item: any) => ({
    type: ActionTypes.ADDTO_CART,
    payload: item
})

export const updateSorting = (data: String) => ({
    type: ActionTypes.UPDATE_SORTING,
    payload: data
})

export const updateFilter = (data: boolean) => ({
    type: ActionTypes.UPDATE_FILTER,
    payload: data
})

export const removeFromCart = (id: any) => ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: id
})