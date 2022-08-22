import React, {useEffect, useState} from 'react';
import './App.css';
import style from './Common/Styles/Wrapper.module.css'
import Counter from "./Components/Counter/Counter";
import Settings from "./Components/Settings/Settings";

function App() {

    let storageStart = localStorage.getItem("StartValue")
    let initialStart = storageStart && JSON.parse(storageStart)

    let storageMax = localStorage.getItem("MaxValue")
    let initialMax = storageMax && JSON.parse(storageMax)

    const [start, setStart] = useState(initialStart)
    const [max, setMax] = useState(initialMax)
    const [counter, setCounter] = useState(start)

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(counter))
        localStorage.setItem("StartValue", JSON.stringify(start))
        localStorage.setItem("MaxValue", JSON.stringify(max))
    }, [counter, start, max])

    useEffect(() => {
        let actualCounter = localStorage.getItem("counterValue")
        actualCounter && setCounter(JSON.parse(actualCounter))
    }, [])

    const numIncreaser = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }

    const numReset = () => {
        setCounter(0)
        // setError(false)
        localStorage.removeItem("counterValue")
    }

    const setSettings = (newStart: number, newMax: number) => {
        setCounter(newStart)
        setStart(newStart)
        setMax(newMax)
        // setError(false)
    }

    return (
        <div className="App">
            <span><h1>Counter Redux</h1></span>
            <div className={style.wrapper}>
                <Counter value={counter}
                         start={start}
                         max={max}
                         // error={error}
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