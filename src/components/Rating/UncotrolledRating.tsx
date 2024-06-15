import * as React from "react";
import {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5


type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log("Rating rendering");
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);
    return (
        <div>
            <Star onClick={() => {
                setValue(1); props.onChange(1);
            }} selected={value > 0}/>
            <Star onClick={() => {
                setValue(2); props.onChange(2);
            }} selected={value > 1}/>
            <Star onClick={() => {
                setValue(3); props.onChange(3);
            }} selected={value > 2}/>
            <Star onClick={() => {
                setValue(4); props.onChange(4);
            }} selected={value > 3}/>
            <Star onClick={() => {
                setValue(5); props.onChange(5);
            }} selected={value > 4}/>
        </div>
    )
}

type StarPropsType = {
    onClick: () => void
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    return (
        <span onClick={props.onClick}>
    {props.selected
        ? <b>star </b>
        : 'star '}
            </span>
    )
}