import * as constants from '../constants/'

const initialState = {
    isFetching: false,
    lastUpdated: null
}

export default function polo(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.POLO_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case actionTypes.POLO_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated : new Date()
            })
        default:
            return state
    }
}
