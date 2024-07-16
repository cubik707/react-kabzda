import React, {useCallback, useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    console.log("SimpleExample");
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    }, );

    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)");
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter]);
    return <>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        Hello, {counter} {fake}
    </>
}

export const SimpleTimeoutExample = () => {
    console.log("SimpleTimeoutExample");

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("useEffect every render");
        setInterval(()=>{
            setCounter(state => state + 1)
        }, 1000)
    }, []);

    return <>
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
        Hello, counter - {counter}
    </>
}

const get2stringDigits = (num: number) => num < 10 ? "0" + num : num

export const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const tick = () => {
            setTime(new Date());
        };

        const intervalId = setInterval(tick, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Current Time</h1>
            <span>{get2stringDigits(time.getHours())}</span>
            :
            <span>{get2stringDigits(time.getMinutes())}</span>
            :
            <span>{get2stringDigits(time.getSeconds())}</span>
        </div>
    );
}