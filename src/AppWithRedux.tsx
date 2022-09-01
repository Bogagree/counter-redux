import React, {useEffect} from 'react';
import './App.css';
import style from './Common/Styles/Wrapper.module.css'
import Counter from "./Components/Counter/Counter";
import Settings from "./Components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {increaseAC, resetAC, SetErrorAC, SetMaxAC, SetSettingsOrStorageAC, SetStartAC} from "./bll/counter-reducer";
import {AppRootStateType} from "./bll/store";

function App() {

    const dispatch = useDispatch()
    let count = useSelector<AppRootStateType, number>(state => state.counter.count)
    const start = useSelector<AppRootStateType, number>(state => state.counter.start)
    const max = useSelector<AppRootStateType, number>(state => state.counter.max)

    let storageStart = localStorage.getItem("StartValue")
    let initialStart = storageStart && JSON.parse(storageStart)

    let storageMax = localStorage.getItem("MaxValue")
    let initialMax = storageMax && JSON.parse(storageMax)

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(count))
        localStorage.setItem("StartValue", JSON.stringify(start))
        localStorage.setItem("MaxValue", JSON.stringify(max))
    }, [count, start, max])

    useEffect(() => {
        let actualCounter = localStorage.getItem("counterValue")
        actualCounter && dispatch(SetSettingsOrStorageAC(JSON.parse(actualCounter)))
    }, [])

    const numIncreaser = () => {
        if (count < max) {
           dispatch(increaseAC())
        }
    }

    const numReset = () => {
        dispatch(resetAC())
        localStorage.removeItem("counterValue")
    }

    const setSettings = (newStart: number, newMax: number) => {
            dispatch(SetStartAC(newStart))
            dispatch(SetSettingsOrStorageAC(newStart))
            dispatch(SetMaxAC(newMax))
            dispatch(SetErrorAC())
    }

    return (
        <div className="App">
            <span><h1>Counter Redux</h1></span>
            <div className={style.wrapper}>
                <Counter value={count}
                         start={start}
                         max={max}
                         incCallback={numIncreaser}
                         resetCallback={numReset}
                />
                <Settings initialStart={initialStart}
                          initialMax={initialMax}
                          setSettings={setSettings}
                />
            </div>
        </div>
    );
}

export default App;