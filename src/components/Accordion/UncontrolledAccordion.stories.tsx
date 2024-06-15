import {action} from '@storybook/addon-actions'
import {useState} from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'Uncontrolled Accordion',
    component: UncontrolledAccordion,
};

export const CollapsedAccordion = () => {
    return  <UncontrolledAccordion titleValue={"Collapsed Accordion"} />
}
