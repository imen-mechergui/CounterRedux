  
import {INCREMENT, DECREMENT, RESET} from '../Constants/ActionsTypes'

export const increment = (payload) => {
return {type: INCREMENT, payload};
};
export const decrement = (payload) => {
    return {type: DECREMENT };
    };
    export const reset = () => {
        return {type: RESET};
        };