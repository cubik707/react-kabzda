import s from './OnOff.module.css'
import {memo} from "react";

type OnOffPropsType = {
    on: boolean
    onClick: (on: boolean) => void
};

export const OnOff = memo(OnOffSecret)

function OnOffSecret (props: OnOffPropsType) {

    return (
        <div className={s.block}>
            <div className={`${s.rect} ${props.on ? s.rectGreen : s.rectWhite}`} onClick={()=>{ props.onClick(true) }}>
                On
            </div>
            <div className={`${s.rect} ${props.on ? s.rectWhite : s.rectRed}`} onClick={()=>{ props.onClick(false) }}>
                Off
            </div>
            <div className={`${s.circle} ${props.on ? s.rectGreen : s.rectRed}`}>
            </div>
        </div>

    );
};