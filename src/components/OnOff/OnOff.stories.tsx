import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff,
};

const callback = action('on or off clicked')


const onChangeHandler = action('on Change')

export const OnMode = () => {
    return  <OnOff on={true} onClick={callback}/>
}

export const OffMode = () => {
    return  <OnOff on={false} onClick={callback}/>
}

export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return  <OnOff on={value} onClick={setValue}/>
}
