import { useReducer } from 'react';
import styles from './count.module.scss';
import classnames from 'classnames';
import { CountReducerActionType, countReducer, initialState } from './count-reducer';

export const Count = () => {
    const [state, dispatch] = useReducer(countReducer, initialState);

    const onIncrement = () => dispatch({ type: CountReducerActionType.INCREMENT });
    const onDecrement = () => dispatch({ type: CountReducerActionType.DECREMENT });
    const onReset = () => dispatch({ type: CountReducerActionType.RESET });

    return (
        <>
            <h1 className={styles.count}>
                count is {state.count}
            </h1>

            <button
                className={styles.action}
                type="button" 
                onClick={onIncrement}>
                Increment
            </button>
    
            <button
                className={classnames(styles.action, { [styles['action--disabled']]: state.decrementDisabled })}
                type="button" 
                onClick={onDecrement}>
                Decrement
            </button>
        
            <button
                className={styles.action}
                type="button" 
                onClick={onReset}>
                Reset
            </button>
        </>
        
    );

}

