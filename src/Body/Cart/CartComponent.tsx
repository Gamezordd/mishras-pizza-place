import React, { Fragment } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Actions } from '../../ReduxStore';
import {CartItem} from './CartItem';
import './styles.css';

const mapStateToProps = (state: any) => {
    return{
        data: state.data,
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        loadMenu: (res: any) => dispatch(Actions.populateMenu(res)),
        addToCart: (item: any) => dispatch(Actions.addToCart(item)),
        removeFromCart: (itemId: any) => dispatch(Actions.removeFromCart(itemId)),
    }
}

interface IProps{
    onBack: () => void;
    onForward: () => void;
    data: any[],
    cart: any[],
}

const CartMainNoRedux = (props: IProps) =>{

    if(props.cart.length > 0){
        return(
            <Fragment>
                <Row>
                    <Col>
                        <h2>Shopping Cart:</h2>
                    </Col>
                </Row>
                <Row className='justify-content-between'>
                    <Col>
                        <h3 style={{float: 'right'}}>
                            Total
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {
                        props.cart.map(i => {
                            return(
                                <CartItem item={i}/>
                            )
                        })
                    }
                    </Col>
                </Row>
                <Row className='checkout-row pt-4'>
                    <Col>
                        <Button onClick={() => props.onForward()} style={{backgroundColor:'#afd275', borderColor:'#afd275', float: 'right'}}>Checkout <i className='fa fa-usd'/></Button>
                    </Col>
                </Row>
    
                <div className='prev-btn'>
                    <Button onClick={() => props.onBack()} style={{backgroundColor:'#afd275', borderColor:'#afd275'}}><i className='fa fa-chevron-left'/>&nbsp;Back To Menu</Button>
                </div>
            </Fragment>
        )
    }
    else{
        return(
            <Row className='justify-content-center pt-5 pb-5'>

            <h4>Such Empty :(. Please Add A Pizza to Checkout.</h4>
                <div className='prev-btn'>
                    <Button onClick={() => props.onBack()} style={{backgroundColor:'#afd275', borderColor:'#afd275'}}><i className='fa fa-chevron-left'/>&nbsp;Back To Menu</Button>
                </div>
            </Row>
        )
    }
{
    
}    
}

export const CartMain = connect(mapStateToProps, mapDispatchToProps)(CartMainNoRedux);