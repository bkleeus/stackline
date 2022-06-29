import { ActionTypes } from "../contants/actionTypes"

const initialState = {
    product: {},
}

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return { ...state, product: payload };
        default:
            return state;
    }
}

export default productReducer;