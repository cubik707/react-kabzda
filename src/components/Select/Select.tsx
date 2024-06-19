import {useState} from "react";
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

    const handleSelect = (value: any) => {
        props.onChange(value);
        setIsOpen(false);
    };

    const selectedItem = props.items.find((i) => i.value === props.value);
    return (
        <div>
            <div className={`${s.selectedItem} ${isOpen ? s.selectedItemOpen : ''}`} onClick={() => setIsOpen(!isOpen)}>
                {selectedItem ? selectedItem.title : "item"}
            </div>
            {isOpen && (
                <div className={s.items}>
                    {props.items.map(i => (
                        <div className={s.item} key={i.value} onClick={() => handleSelect(i.value)}>
                            {i.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}