import React, { Fragment, useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import {Actions} from '../../ReduxStore';
import {MenuAPI} from './constants';
import { MenuBody } from './MenuBody';

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

interface IProps{
    data: any,
    loadMenu: (res: any) => void,
    nextPage: () => void,
}

const MenuComponentNoRedux = (props: IProps) =>{
    const [isLoading, setLoading] = useState(false);

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
            <MenuBody/>
            <div className='next-btn'>
                <Button onClick={() => props.nextPage()} style={{backgroundColor:'#afd275', borderColor:'#afd275'}}>Go To Cart <i className='fa fa-chevron-right'/></Button>
                <div className='count-badge'>
                    <div className='badge-count'>20</div>
                </div>
            </div>
        </Fragment>
    )
}

export const MenuComponent = connect(mapStateToProps, mapDispatchToProps)(MenuComponentNoRedux);