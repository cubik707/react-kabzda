import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input',
    //component: OnOff
}

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }

    return <>
        <input onChange={onChange}/> - {value}
    </>
};

export const GeyValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button> - actual value: {value}
    </>
};


export const ControlledInputWithFixedValue = () => <input value={"it-incubator.by"}/>;