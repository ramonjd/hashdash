import {* as constants} from '../constants/'

const initialState = {
    isFetchingJobs: false,
    jobs: [],
    lastUpdatedId: ''
}

export default function jobs(state = initialState, action = {}) {
    switch (action.type) {
        case actionTypes.JOBS_REQUEST:
            return Object.assign({}, state, {
                isFetchingJobs: true
            })
        case actionTypes.JOBS_SUCCESS:
            return Object.assign({}, state, {
                isFetchingJobs: false,
                jobs : action.data.jobs,
                lastUpdatedId : action.data.lastUpdatedId
            })
        default:
            return state
    }
}
