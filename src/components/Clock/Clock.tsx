import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ClockPropsType = {
    mode: 'digital' | 'analog'
}

export const Clock = (props: ClockPropsType) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const tick = () => {
            setTime(new Date());
        };

        const intervalId = setInterval(tick, 1000);

        return () => clearInterval(intervalId);
    }, []);

    let view;

    switch (props.mode){
        case "analog":
            view = <AnalogClockView time={time}/>
        break;
        case "digital":
        default:
            view = <DigitalClockView time={time}/>

    }

    return (
        <div>
            {view}
        </div>
    );
}

export type ClockViewPropsType = {
    time: Date
}

