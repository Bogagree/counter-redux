let storageStart = localStorage.getItem("StartValue")
const initStartValue = storageStart && JSON.parse(storageStart)

const initialState: InitialStatetype = {
    count: initStartValue,
    error: true,
    start: initStartValue,
    max: 7
}

export const counterReducer = (state: InitialStatetype = initialState, action: CountActionType): InitialStatetype => {
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

export const increaseAC = () => {
    return {type: 'INCREMENT'} as const
}

export const resetAC = () => {
    return {type: 'RESET'} as const
}

export const SetErrorAC = () => {
    return {type: 'SET-ERROR'} as const
}

export const SetSettingsOrStorageAC = (value: number) => {
    return {type: 'SET-STORAGE', payload: {count: value}} as const
}

export const SetStartAC = (value: number) => {
    return {type: 'SET-START', payload: {start: value}} as const
}

export const SetMaxAC = (value: number) => {
    return {type: 'SET-MAX', payload: {max: value}} as const
}

type CountActionType = ReturnType<typeof increaseAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof SetErrorAC>
    | ReturnType<typeof SetMaxAC>
    | ReturnType<typeof SetStartAC>
    | ReturnType<typeof SetSettingsOrStorageAC>

export type InitialStatetype = {
    count: number
    error: boolean
    start: number
    max: number
}