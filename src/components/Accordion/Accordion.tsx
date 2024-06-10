
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=> {props.onChange(!props.collapsed)}}/>
            { !props.collapsed && <AccordionBody/>}
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

export default Accordion;