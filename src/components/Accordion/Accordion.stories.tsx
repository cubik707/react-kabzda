import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions'

import {Accordion} from './Accordion';
import {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion,
};


const onChangeHandler = action('on Change')
const callbackOnClick = action('some item was clicked')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                      collapsed={true}
                      onChange={onChangeHandler}
                      items={[]}
                      onClick={callbackOnClick}
    />
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"Users"}
                      collapsed={false}
                      onChange={onChangeHandler}
                      items={[
                          {
                              title: "Dimych",
                              value: 1,
                          },
                          {
                              title: "Valera",
                              value: 3,
                          },
                          {
                              title: "Artem",
                              value: 4,
                          },
                          {
                              title: "Victor",
                              value: 5,
                          },
                      ]}
                      onClick={callbackOnClick}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={"Accordion"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      items={[
                          {
                              title: "Dimych",
                              value: 1,
                          },
                          {
                              title: "Valera",
                              value: 3,
                          },
                          {
                              title: "Artem",
                              value: 4,
                          },
                          {
                              title: "Victor",
                              value: 5,
                          },
                      ]}
                      onClick={(id)=>{alert(`user with ID ${id} should be happy`)}}
    />
}