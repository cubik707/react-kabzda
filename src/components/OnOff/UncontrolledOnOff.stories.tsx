import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {UncontrolledOnOff} from './UncontrolledOnOff'


export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff,
};

const onChangeHandler = action('on or off mode')

export const UncontrolledOnOffMode = () => {
    return  <UncontrolledOnOff on={true} onChange={onChangeHandler} />
}


