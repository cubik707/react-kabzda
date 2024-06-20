import {useState, KeyboardEvent} from "react";
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

    const handleSelect = (value: any) => {
        props.onChange(value);
        setIsOpen(false);
    };

    const toggleItems = () => setIsOpen(!isOpen)

    const selectedItem = props.items.find((i) => i.value === props.value);

    const onKeyUp = (e:  KeyboardEvent<HTMLDivElement>) =>{
        for(let i=0;i<props.items.length; i++){
            if(props.items[i].value === hoveredElementValue) {
                if(props.items[i++]){
                    props.onChange(props.items[i++].value)
                }
                break
            }
        }
    }

    return (
        <div onKeyUp={onKeyUp} tabIndex={0}>
            <h3 className={`${s.selectedItem} ${isOpen ? s.selectedItemOpen : ''}`} onClick={toggleItems}>
                {selectedItem && selectedItem.title}
            </h3>
            {isOpen && (
                <div className={s.items}>
                    {props.items.map(i => (
                        <div className={s.item}
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