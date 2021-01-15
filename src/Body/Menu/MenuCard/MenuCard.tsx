import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as Actions from '../../../ReduxStore/Actions';
import Customizer from '../CustomizeMenu';

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
    addToCart: (item: any) => void,
    removeFromCart: (itemId: number) => void,
    pza: any,
    cart: any[],
}

const MenuCardNoRedux = (props: IProps) => {
    const {pza} = props;
    const [quantity, setQuantity] = useState(1);
    const [showCustomizer, setCustomizer] = useState(false);

    //console.log('wht: ', props);
    
    
    const stars = (num: number)=>{
        num = num < 0 ? -num : num;

        return(
            <div>
                {
                    Array.apply(null,Array(Math.floor(num))).map((i, ind) => {
                        return (<i key={'11232' + ind} className='fa fa-star' style={{color: '#7e685a'}}>&nbsp;</i>)
                    })
                }
                {
                    (num - Math.floor(num) > 0 ) ? <i className='fa fa-star-half' style={{color: '#7e685a'}}/> : null
                }
            </div>
        )
    }

    const quantCounter = (
       
            <Row className='align-items-center'>
                <i onClick={() => setQuantity(quantity + 1)} className='fa fa-plus counter-icon'/>&nbsp;
                <h4 className='counter-disp'>
                    {quantity}
                </h4>
                &nbsp;
                <i onClick={() => quantity > 0 ? setQuantity(quantity - 1) : null} className='fa fa-minus counter-icon'/>&nbsp;&nbsp;
                <i onClick={() => setCustomizer(true)} className='fa fa-cart-plus fa-2x counter-add-icon'/>
            </Row>
    )
    // props.addToCart({...pza, count: quantity})

    const cartDelete = (
        <Button size='sm' onClick={() => props.removeFromCart(pza.id)} variant='danger'>Remove</Button>
    )
    
    return (
        <div className='menu-card' >
            <Customizer hideModal={() => setCustomizer(false)} baseData={{...pza, count: quantity}} isOpen={showCustomizer} />
            <Card>
                <Card.Img style={{minHeight: '220px', minWidth:'189px'}} src={pza.img_url}/>
                <Card.ImgOverlay>
                    {
                        pza.isVeg ? 
                        <div className='veg-mark'></div>
                        :
                        <div className='non-veg-mark'></div>
                    }
                    
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Title style={{fontSize: pza.name.length > 10 ? '15px' : '20px'}}>{pza.name}</Card.Title>
                    {stars(pza.rating)}
                    <Card.Text style={{fontSize:'14px'}}> {pza.description} </Card.Text>
                    <Row className='justify-content-between'>
                        <Col>
                            <h5 className='price-tag'>
                                ₹&nbsp;{pza.price}
                            </h5>
                            
                        </Col>
                        <Col>
                            <div className='counter-container'>
                                {
                                    props.cart.some(i => i.id === pza.id)  ? cartDelete : quantCounter
                                }
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export const MenuCard = connect(mapStateToProps, mapDispatchToProps)(MenuCardNoRedux);