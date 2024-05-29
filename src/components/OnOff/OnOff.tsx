import s from './OnOff.module.css'
type OnOffPropsType = {
    on: boolean
};
export const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={s.block}>
            <div className={`${s.rect} ${props.on ? s.rectGreen : ''}`}>
                On
            </div>
            <div className={`${s.rect} ${!props.on ? s.rectRed : ''}`}>
                Off
            </div>
            <div className={`${s.circle} ${props.on ? s.rectGreen : s.rectRed}`}>
            </div>
        </div>

    );
};