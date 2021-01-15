import React, { useState } from 'react';
import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
export {};
interface IProps{
    isRadio: boolean, 
    data: string[], 
    onSelection: (res: string | string[]) => void,
}

export const ChoiceComponent = (props: IProps) => {
    const {isRadio, data, onSelection} = props;
    if(data.length <= 0) return <div></div>;
    
    if(isRadio){
        return(
            <ToggleButtonGroup  name='rara' type='radio' onChange={e => onSelection([].concat(e))}>
                {
                    data.map((i: any, ind) => {
                        return(
                            <ToggleButton variant='info' key={'121' + ind} value={i.size ? i.size : i.name}>
                                {i.size ? i.size : i.name}
                            </ToggleButton>
                        )
                    })
                }
            </ToggleButtonGroup>
        )
    }
    else{
        return(
            <ToggleButtonGroup type='checkbox' name='habibi' onChange={(e) => onSelection(e)}>
                {
                    data.map((i: any,ind) => {
                        return(
                            <ToggleButton variant='info' key={'1221' + ind} value={i.size ? i.size : i.name}>
                                {i.size ? i.size : i.name}
                            </ToggleButton>
                        )
                    })
                }
            </ToggleButtonGroup>
        )
    }
}