import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Actions } from '../../ReduxStore';
import {MeatToggle} from './MeatToggle';
import './styles.css';

const mapStateToProps = (state: any) => {
    return{
        data: state.data,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        loadMenu: (res: any) => dispatch(Actions.populateMenu(res)),
        setSort: (param: String) => dispatch(Actions.updateSorting(param)),
        setNonVeg: (isNonVeg: boolean) => dispatch(Actions.updateFilter(isNonVeg)),
    }
}

interface IProps{
    setSort: (param: String) => void,
    setNonVeg: (isNonVeg: boolean) => void,
}

const sortOptions = ['Price', 'Rating'];

const OptionsNoConnect = (props: IProps) => {
   
    return(
        <Row style={{height: '130px'}} className='justify-content-between px-4 align-items-center'>
            <div>
            <Dropdown>
                <Dropdown.Toggle className='sort-dropdown'>
                    Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {sortOptions.map((optn,ind) =>{
                        return(
                            <Dropdown.Item key={'123' + ind} onClick={() => {props.setSort(optn)}}>{optn}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <Row className='px-3'>
                <h4 className='meat-text'>Showing</h4> &nbsp; &nbsp;
                <MeatToggle onToggle={(status) => props.setNonVeg(status)}/> &nbsp;&nbsp;
                <h4 className='meat-text'>Pizzas</h4>
            </Row>
        </Row>
    )
}

export const Options = connect(mapStateToProps, mapDispatchToProps)(OptionsNoConnect)