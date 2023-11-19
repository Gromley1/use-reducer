export enum CountReducerActionType {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    RESET = 'RESET'
}

type CountReducerActions = { type: CountReducerActionType.INCREMENT}
    | { type: CountReducerActionType.DECREMENT}
    | { type: CountReducerActionType.RESET }


type CountReducerState = {
    count: number;
    decrementDisabled: boolean;
}

export const initialState: CountReducerState = { 
    count: 0,
    decrementDisabled: true
};

export const countReducer = (state: CountReducerState, action: CountReducerActions): CountReducerState => {
    switch (action.type) {
        case CountReducerActionType.INCREMENT:
            return { 
                ...state, 
                count: state.count + 1,
                decrementDisabled: state.count + 1 <= 0
            };
        case CountReducerActionType.DECREMENT:
            if (state.count - 1 <= 0) {
                return { 
                    ...state,
                    count: 0,
                    decrementDisabled: true 
                }
            }
            
            return { 
                ...state, 
                count: state.count - 1 
            };
        case CountReducerActionType.RESET:
            return { 
                ...state, 
                count: 0,
                decrementDisabled: true
            };
        default:
            return state;
    }
}

