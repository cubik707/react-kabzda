import React, {useState} from "react";

export default {
    title: 'useState demo',
}

function generateData(){
    return 234235555
}

export const Example1 = () => {
    console.log("Example1");
    const initValue = generateData()
    const [counter, setCounter] = useState(generateData)
    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}

