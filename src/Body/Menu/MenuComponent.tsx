import React, { Fragment, useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import {Actions} from '../../ReduxStore';
import {MenuAPI} from './constants';

const mapStateToProps = (state: any) => {
    return{
        data: state.data,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        loadMenu: (res: any) => dispatch(Actions.populateMenu(res)),
    }
}

const MenuComponentNoRedux = (props: any) =>{
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // fetchMenu();
        console.log("data: ", props.data);
        
    }, []);

    async function fetchMenu(){
        try {
            let res = await fetch(MenuAPI);
            res = await res.json();
            props.loadMenu(res);
        } catch (err) {
            console.error(err);
        }
        // setLoading(false);
    }
    if(isLoading){
        const loadingCard = (
            <Card style={{height: "300px", paddingTop: '30%'}}>
                <Spinner style={{placeSelf: 'center', color: '#7e685a'}} animation='border'/>
                <p style={{placeSelf: 'center', color: '#7e6851'}}>Loading</p>
            </Card>
        )
        const allCards = (
            <Row>
                <Col xs='3'>
                    {loadingCard}
                </Col>
                <Col xs='3'>
                    {loadingCard}
                </Col>
                <Col xs='3'>
                    {loadingCard}
                </Col>
                <Col xs='3'>
                    {loadingCard}
                </Col>
            </Row>
        )
        return(
            <div>
                {allCards}
            </div>
        )
    }
    
    return(
        <Fragment>

        </Fragment>
    )
}

export const MenuComponent = connect(mapStateToProps, mapDispatchToProps)(MenuComponentNoRedux);