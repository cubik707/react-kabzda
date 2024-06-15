import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
};

export const CollapsedAccordion = () => {
    return  <UncontrolledAccordion titleValue={"Collapsed Accordion"} />
}
