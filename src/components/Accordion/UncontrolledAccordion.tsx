import {memo, useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export const UncontrolledAccordion = memo(UncontrolledAccordionSecret)

function UncontrolledAccordionSecret(props: AccordionPropsType) {
    console.log("Accordion rendering")
    // const [collapsed, setCollapsed] = useState(false);
    const [state, dispatch] = useReducer(reducer, {collapsed: false});
    return (
        <div>
            {/*<AccordionTitle onClick={()=>{*/}
            {/*    setCollapsed(!collapsed)}} title={props.titleValue}/>*/}
            <AccordionTitle title={props.titleValue} onClick={()=>{
               dispatch({type: TOGGLE_COLLAPSED})} }/>
            {/*<button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            { !state.collapsed && <AccordionBody/>}
        </div>

    );


}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}