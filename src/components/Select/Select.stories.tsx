import {Select} from "./Select";
import {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select,
};

export const WithValueSelect = () => {
    const [value, setValue] = useState(2)

    return <Select
        value={value}
        onChange={setValue}
        items={[
            {
                title: "Dimych",
                value: 1,
            },
            {
                title: "Valera",
                value: 2,
            },
            {
                title: "Artem",
                value: 3,
            },
            {
                title: "Victor",
                value: 4,
            },
        ]}/>
}

export const WithoutValueSelect = () => {
    const [value, setValue] = useState(null)

    return <Select
        value={value}
        onChange={setValue}
        items={[
            {
                title: "Dimych",
                value: 1,
            },
            {
                title: "Valera",
                value: 2,
            },
            {
                title: "Artem",
                value: 3,
            },
            {
                title: "Victor",
                value: 4,
            },
        ]}/>
}

