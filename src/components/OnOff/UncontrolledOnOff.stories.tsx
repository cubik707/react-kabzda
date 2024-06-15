import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {UncontrolledOnOff} from './UncontrolledOnOff'


export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff,
};

const onChangeHandler = action('on or off mode')

export const OnMode = () => {
    return  <UncontrolledOnOff defaultOn={true} onChange={onChangeHandler} />
}

export const OffMode = () => {
    return  <UncontrolledOnOff defaultOn={false} onChange={onChangeHandler} />
}

export const BugMode = () => {
    return  <div>Unsync when change defaultValue when already rendered</div>
}



