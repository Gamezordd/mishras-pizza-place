import React, { Fragment, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Menu from './Menu';
import {Options} from './Menu/OptionsComponent';
import CartMain from './Cart';

export const BodyComponent = () => {
    const [currPage, setPage] = useState(0);
    //page 0 - menu
    //page 1 - cart

    return(
        <Container>
            
            {
                currPage === 0 ? 
                (
                    <Fragment>
                        <Options/>
                        <Menu nextPage={() => setPage(currPage + 1)}/>
                    </Fragment>
                    
                ):
                currPage === 1 ?
                    <CartMain onBack={() => setPage(currPage - 1)} onForward={() => setPage(currPage + 1)} />
                :
                <div></div>
                
            }
        </Container>
        
    )
}