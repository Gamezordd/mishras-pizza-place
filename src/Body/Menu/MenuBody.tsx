import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Actions } from '../../ReduxStore';
import DATA from '../../dummydata';
import { MenuCard } from './MenuCard/MenuCard';

const mapStateToProps = (state: any) => {
    return{
        data: state.data,
    }
}

interface IProps{

}
const MenuBodyNoStore = (props: IProps) => {
    return(
        <Row>
            {
                DATA.map(pza => {
                    return(
                        <Col key={pza.id} xs={12} sm={6} lg={4} xl={3}>
                            <MenuCard pza={pza}/>
                        </Col>
                    )
                })
            }
            
        </Row>
    )
}

export const MenuBody = connect(mapStateToProps)(MenuBodyNoStore);