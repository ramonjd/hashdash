import * as constants from '../constants/'

const initialState = {
    isFetching: false,
    lastUpdated: null,
    data : {}
}

export default function polo(state = initialState, action = {}) {
    switch (action.type) {
        case constants.POLO_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case constants.POLO_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated : new Date(),
                data : action.data
            })
        default:
            return state
    }
}
