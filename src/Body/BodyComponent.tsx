import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from './Menu';
import {Options} from './Menu/OptionsComponent'
export const BodyComponent = () => {
    return(
        <Container>
            <Options/>
            <Menu/>
        </Container>
    )
}