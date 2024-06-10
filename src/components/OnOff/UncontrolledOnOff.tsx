import s from './OnOff.module.css'
import {useState} from "react";
type UncontrolledOnOffPropsType = {
    on: boolean
};

function UncontrolledOnOff (props: UncontrolledOnOffPropsType) {
    const [on, setOn] = useState(false);

    return (
        <div className={s.block}>
            <div className={`${s.rect} ${on ? s.rectGreen : s.rectWhite}`} onClick={()=>{ setOn(true) }}>
                On
            </div>
            <div className={`${s.rect} ${on ? s.rectWhite : s.rectRed}`} onClick={()=>{ setOn(false) }}>
                Off
            </div>
            <div className={`${s.circle} ${on ? s.rectGreen : s.rectRed}`}>
            </div>
        </div>

    );
};

export default UncontrolledOnOff;