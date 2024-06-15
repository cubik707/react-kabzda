import type { Meta } from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {Accordion}  from './Accordion';
import {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion,
};


const onChangeHandler = action('on Change')

export const CollapsedAccordion = () => {
    return  <Accordion titleValue={"Collapsed Accordion"}
                       collapsed={true}
                       onChange={onChangeHandler}
    />
}

export const OpenedAccordion = () => {
    return  <Accordion titleValue={"Opened Accordion"}
                       collapsed={false}
                       onChange={onChangeHandler}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return  <Accordion titleValue={"Accordion"}
                       collapsed={collapsed}
                       onChange={()=>{
                           setCollapsed(!collapsed)
                       }}
    />
}