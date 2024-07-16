import React, {useCallback, useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const ClockAnalogExample = () => {
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

export const SimpleIntervalExample = () => {
    console.log("SimpleIntervalExample");

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("useEffect every render");
        const intervalId = setInterval(()=>{
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, []);

    return <>
        Hello, counter - {counter}
    </>
}

export const ResetEffectExample = () => {
    console.log("Component rendered");

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("Effect occured")

        return () => {
            console.log("RESET EFFECT");
        }
    }, []);

    const increase = () => {setCounter(counter+1)}

    return <>
        Hello, counter - {counter} <button onClick={increase}></button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log("Component rendered with" + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent)=>{
            console.log(e.key)
            setText(prevState => prevState + e.key)
        }
        window.document.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress',handler)
        }
    }, []);

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')

    console.log("Component rendered with" + text)

    useEffect(() => {
        const timeoutId = setTimeout(()=> {
            console.log("TIMEOUT EXPIRED")
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text]);

    return <>
        Typed text: {text}
    </>
}

