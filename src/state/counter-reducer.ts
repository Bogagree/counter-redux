type CountActionType = IncreaseActionType
    | ResetActionType
    | SetErrorActionType
    | SetSettingsOrStorageType
    | SetMaxACType
    | SetStartACType
    | SetStorageACType

type IncreaseActionType = {
    type: "INCREMENT"
}

type ResetActionType = {
    type: "RESET"
}

type SetSettingsOrStorageType = {
    type: 'SET-STORAGE' | 'SET-START'
    payload: {
        value: number
    }
}

type SetMaxACType = ReturnType<typeof SetMaxAC>
type SetStartACType = ReturnType<typeof SetMaxAC>
type SetStorageACType = ReturnType<typeof SetMaxAC>

type SetErrorActionType = {
    type: 'SET-ERROR'
}

export type CounterType = {
    count: number
    error: boolean
    start: number
    max: number
}

const initValue = 4

const initialState: CounterType = {
    count: initValue,
    error: true,
    start: initValue,
    max: 7
}

export const counterReducer = (state: CounterType = initialState, action: CountActionType): CounterType => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1};
        case "RESET":
            return {...state, count: state.start};
        case 'SET-ERROR':
            return {...state, error: !state.error}
        case "SET-MAX":
        case "SET-START":
        case "SET-STORAGE":
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export const increaseAC = (): CountActionType => {
    return {type: 'INCREMENT'}
}

export const resetAC = (): CountActionType => {
    return {type: 'RESET'}
}

export const SetErrorAC = (): SetErrorActionType => {
    return {type: 'SET-ERROR'}
}

export const SetSettingsOrStorageAC = (value: number) => {
    return {type: 'SET-STORAGE', payload: {count: value}}
}

export const SetStartAC = (value: number) => {
    return {type: 'SET-START', payload: {start: value}}
}

export const SetMaxAC = (value: number) => {
    return {type: 'SET-MAX', payload: {max: value}}
}