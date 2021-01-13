import React, { useEffect } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { connect } from 'react-redux';
import {Actions} from '../../ReduxStore';
import {MenuAPI} from './constants';
const mapStateToProps = (state: any) => {
    return{
        data: state.data,
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return{
        loadMenu: (res: any) => dispatch(Actions.populateMenu(res)),
    }
}

const MenuComponentNoRedux = (props: any) =>{
    useEffect(() => {
        console.log("run");
        
        fetchMenu();
    }, []);

    async function fetchMenu(){
        let res = await fetch(MenuAPI);
        res = await res.json();
        props.loadMenu(res);
        // console.log("response: ", res);
    }

    return(
        <div></div>
    );
}

export const MenuComponent = connect(mapStateToProps, mapDispatchToProps)(MenuComponentNoRedux);