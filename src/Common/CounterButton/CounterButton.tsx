import React, {ReactNode} from 'react';
import style from './CounterButton.module.css'

export type ButtonPropsType = {
    children?: ReactNode
    title: string
    callback: () => void
    disabled: boolean
}

const CounterButton = (props:ButtonPropsType) => {

    const buttonOnClickHandler = () => {
        props.callback()
    }

    return (
            <button
                className={style.btn}
                onClick={buttonOnClickHandler}
                disabled={props.disabled}>
                {props.title}
            </button>
    );
};

export default CounterButton;