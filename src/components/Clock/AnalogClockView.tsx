import React from "react";
import {ClockViewPropsType} from "./Clock";
import styles from './AnalogClockView.module.css'

export const AnalogClockView = ({time}: ClockViewPropsType) => {
    const secondsStyle = {
        transform: `rotate(${time.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${time.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${time.getHours() * 30}deg)`
    };
    return <div className={styles.clock}>
        <div className={styles["analog-clock"]}>
            <div className={`${styles.dial} ${styles.seconds}`} style={secondsStyle}/>
            <div className={`${styles.dial} ${styles.minutes}`} style={minutesStyle}/>
            <div className={`${styles.dial} ${styles.hours}`} style={hoursStyle}/>
        </div>
    </div>
}