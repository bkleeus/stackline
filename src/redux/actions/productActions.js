import { ActionTypes } from "../contants/actionTypes";

export const setProduct = (product) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: product,
    }
}