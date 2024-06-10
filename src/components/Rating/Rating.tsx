import * as React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering");
    return (
        <div>
            <Star onClick={props.onClick} value={1} selected={props.value > 0}/>
            <Star onClick={props.onClick} value={2} selected={props.value > 1}/>
            <Star onClick={props.onClick} value={3} selected={props.value > 2}/>
            <Star onClick={props.onClick} value={4} selected={props.value > 3}/>
            <Star onClick={props.onClick} value={5} selected={props.value > 4}/>
        </div>
    )
}

type StarPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("Star rendering");
    return (
        <span onClick={() => props.onClick(props.value)}>
    {props.selected
        ? <b>star </b>
        : 'star '}
            </span>
    )
}