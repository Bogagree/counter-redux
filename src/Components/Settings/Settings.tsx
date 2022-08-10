import React, {ChangeEvent, useState} from 'react';
import CounterButton from "../../Common/CounterButton/CounterButton";
import styleContainer from '../../Common/Styles/Container.module.css'
import style from './Settings.module.css'

type SettingsPropsType = {
    initialStart: number
    initialMax: number
    setSettings: (newStart: number, newMax: number) => void
}

const Settings: React.FC<SettingsPropsType> = (
    {
        initialMax, initialStart, setSettings
    }
) => {


    const [start, setStart] = useState(initialStart)
    const [max, setMax] = useState(initialMax)

    const setHandler = () => {
        setSettings(start, max)
    }

    const startOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(+e.currentTarget.value)
    }

    const maxOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
    }
    let isDisabled = start < 0 || max < 0 || start >= max

    let finalClassName = isDisabled ? style.warning : '';

    return (
        <div className={styleContainer.container}>
            <div>Start</div>
            <input type="number"
                   title={"start"}
                   value={start}
                   onChange={startOnChangeHandler}
                   className={finalClassName}
            />

            <div>Max</div>
            <input type="number"
                   title={"max"}
                   value={max}
                   onChange={maxOnChangeHandler}
                   className={finalClassName}
            />

            <CounterButton title={'set'} callback={setHandler} disabled={isDisabled}/>
        </div>
    )
};

export default Settings;