import s from './OnOff.module.css'
import {memo, useState} from "react";
type UncontrolledOnOffPropsType = {
    defaultOn?: boolean
    onChange: (on: boolean) => void
};

export const UncontrolledOnOff = memo(UncontrolledOnOffSecret)

function UncontrolledOnOffSecret (props: UncontrolledOnOffPropsType) {
    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div className={s.block}>
            <div className={`${s.rect} ${on ? s.rectGreen : s.rectWhite}`} onClick={onClicked}>
                On
            </div>
            <div className={`${s.rect} ${on ? s.rectWhite : s.rectRed}`} onClick={offClicked}>
                Off
            </div>
            <div className={`${s.circle} ${on ? s.rectGreen : s.rectRed}`}>
            </div>
        </div>

    );
};
