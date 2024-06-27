import {useState, KeyboardEvent, useEffect} from "react";
import s from  './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

export function Select(props: SelectPropsType) {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredElementValue, setHoveredElementValue ] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [ props.value ]);

    const handleSelect = (value: any) => {
        props.onChange(value);
        setIsOpen(false);
    };

    const toggleItems = () => setIsOpen(!isOpen)

    const selectedItem = props.items.find((i) => i.value === props.value);
    const hoveredItem = props.items.find(i=> i.value === hoveredElementValue)

    const onKeyUp = (e:  KeyboardEvent<HTMLDivElement>) =>{
        if(e.key === "ArrowDown" || e.key === "ArrowUp"){
            for(let i=0;i<props.items.length; i++){
                if(props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i+1] : props.items[i-1]
                    if(pretendentElement){
                        props.onChange(pretendentElement.value)
                    }
                    return
                }
            }
            props.onChange(props.items[0].value)
        }
        if(e.key === "Enter" || e.key === "Escape"){
            setIsOpen(false)
        }

    }

    return (
        <div onKeyUp={onKeyUp} tabIndex={0} onKeyPress={()=>{}}>
            <h3 className={`${s.selectedItem} ${isOpen ? s.selectedItemOpen : ''}`} onClick={toggleItems}>
                {selectedItem && selectedItem.title}
            </h3>
            {isOpen && (
                <div className={s.items}>
                    {props.items.map(i => (
                        <div className={s.item + " " + (hoveredItem === i ? s.selected : '')}
                             key={i.value}
                             onMouseEnter={()=>{
                                 setHoveredElementValue(i.value)
                             }}
                             onClick={() => handleSelect(i.value)}>
                            {i.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}