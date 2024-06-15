import {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle onClick={()=>{setCollapsed(!collapsed)}} title={props.titleValue}/>
            {/*<button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            { !collapsed && <AccordionBody/>}
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