type CountActionType = IncreaseActionType
    | ResetActionType
    | SetErrorActionType
    | SetSettingsOrStorageType

type IncreaseActionType = {
    type: "INCREMENT"
}

type ResetActionType = {
    type: "RESET"
}

type SetSettingsOrStorageType = {
    type: 'SET-STORAGE' | 'SET-MAX' | 'SET-START'
    payload: {
        value: number
    }
}

type SetErrorActionType = {
    type: 'SET-ERROR'
}

export type CounterType = {
    count: number
    error: boolean
    start: number
    max: number
}

const initialState: CounterType = {
    count: 0,
    error: false,
    start: 4,
    max: 7
}

export const counterReducer = (state: CounterType = initialState, action: CountActionType): CounterType => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1};
        case "RESET":
            return {...state, count: 0};
        case "SET-STORAGE":
            return {...state, count: action.payload.value};
        case 'SET-ERROR':
            return {...state, error: !state.error}
        case "SET-MAX":
            return {...state, max: action.payload.value};
        case "SET-START":
            return {...state, start: action.payload.value};
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

export const SetSettingsOrStorageAC = (value: number): SetSettingsOrStorageType => {
    return {type: 'SET-STORAGE', payload: {value}}
}

export const SetStartAC = (value: number): SetSettingsOrStorageType => {
    return {type: 'SET-START', payload: {value}}
}

export const SetMaxAC = (value: number): SetSettingsOrStorageType => {
    return {type: 'SET-MAX', payload: {value}}
}