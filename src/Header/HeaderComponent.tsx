import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './styles.css';

export const Header = () => {
    return(
        <Jumbotron className='banner-style'>
            <h1>Treflo Pizza Place</h1>
            <p>Shop from our selection of hand-tossed freshly baked pizzas</p>
        </Jumbotron>
    )
}