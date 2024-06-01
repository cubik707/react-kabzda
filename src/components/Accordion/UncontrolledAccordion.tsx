import {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
            { !collapsed && <AccordionBody/>}
        </div>

    );


}

function AccordionTitle(props: any) {
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;