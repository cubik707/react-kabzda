import React from "react";
import {ClockViewPropsType} from "./Clock";

const get2stringDigits = (num: number) => num < 10 ? "0" + num : num

export const DigitalClockView = ({time}: ClockViewPropsType) => {
    return <>
        <span>{get2stringDigits(time.getHours())}</span>
        :
        <span>{get2stringDigits(time.getMinutes())}</span>
        :
        <span>{get2stringDigits(time.getSeconds())}</span>
    </>
}