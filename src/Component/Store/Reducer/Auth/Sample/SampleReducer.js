import { SET_DATA } from "../../../Action/Sample/SampleAction";

const initialState = {
    doc: null,
    timestamp: Date.now()
}

const SampleReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DATA:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default SampleReducer;