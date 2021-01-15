import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import './styles.css';

interface IProps{
    item: any
}

export const CartItem = (props: IProps) => {
    const {item} = props;
    
    return(
        <Row className='mb-4 cart-item-container pt-4 pb-4'>
            <Col xs = {12} lg={2}>
                <img style={{height: '145px', width: '145px'}} className='mx-auto' src={item.img_url}/>
            </Col>
            <Col xs={12} lg={8}>
                <h5 className='cart-item-title'>{item.name} </h5>
                <p style={{color: 'GrayText'}}>{item.count} x {item.size[0]}</p>
                {
                    item.toppings.length > 0 ? 
                    (
                        <Fragment>
                            <strong>Toppings:</strong>
                            {
                                item.toppings.map((i: string) => {
                                    return(
                                        <p className='p-0 m-0'>{i}</p>
                                    )
                                })
                                
                            }
                        </Fragment>
                    )
                    :
                    null
                }
                
            </Col>
            <Col xs={12} lg ={2}>
                <h4 style={{float: 'right'}}>₹ {item.price * item.count}</h4>
            </Col>
        </Row>
    )
}