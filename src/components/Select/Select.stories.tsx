import {Select} from "./Select";
import {useState} from "react";


export default {
    title: 'Select',
    component: Select,
};

export const SelectChangeMode = () => {
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
        ]}/>
}
