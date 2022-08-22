import React from 'react';
import styleContainer from '../../Common/Styles/Container.module.css'
import style from './Counter.module.css'
import CounterButton from "../../Common/CounterButton/CounterButton";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

type CounterPropsType = {
    value: number
    start: number
    max: number
    incCallback: () => void
    resetCallback: () => void
}

const Counter = (props: CounterPropsType) => {

    const error = useSelector<AppRootStateType, boolean>(state => state.counter.error)


    const increaseHandler = () => {
        props.incCallback()
    }

    const resetHandler = () => {
        props.resetCallback()
    }

    return (
        <div className={styleContainer.container}>

            <div className={style.counter}>
                <div className={style.num}>
                    {error
                        ? "Incorrect value!"
                        : props.value}
                </div>
                <div>
                    <CounterButton callback={increaseHandler}
                                   disabled={props.value === props.max}
                                   title={'inc'}>
                    </CounterButton>

                    <CounterButton callback={resetHandler}
                                   disabled={props.value === props.start}
                                   title={'reset'}>
                    </CounterButton>
                </div>
            </div>
        </div>
    );
};

export default Counter;