
import * as constants from '../Body/Menu/constants';
import * as ActionTypes from './ActionTypes';

export const populateMenu = (resp: any) => ({
    type: ActionTypes.POPULATE_MENU,
    payload: resp
})