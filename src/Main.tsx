import React, { Fragment } from 'react';
import Header from './Header';
import BodyComponent from './Body';
import Footer from './Footer';

export default () => {
    return(
        <Fragment>
            <Header/>
            <BodyComponent/>
            <Footer/>
        </Fragment>
    )
}