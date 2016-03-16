// https://xgrommx.github.io/rx-book/why_rx.html
function scheduleRequest() {
    return {
        type: actionTypes.SCHEDULE_REQUEST
    }
}

function scheduleSuccess(data) {
    return {
        type: actionTypes.SCHEDULE_SUCCESS,
        data
    }
}

function scheduleFailure() {
    return {
        type: actionTypes.SCHEDULE_FAILURE
    }
}

export function createSchedule(data) {
    return (dispatch) => {
        dispatch(scheduleRequest())
        return axios.post(api.SCHEDULES_URL, data).then((response) => {
            dispatch(scheduleSuccess(response.data))
        }).catch((response) => {
            dispatch(scheduleFailure(response))
        })
    }
}

export function clearSchedule() {
    return (dispatch) => {
        dispatch(scheduleRequest())
        return axios.post(api.SCHEDULES_URL, data).then((response) => {
            dispatch(scheduleSuccess(response.data))
        }).catch((response) => {
            dispatch(scheduleFailure(response))
        })
    }
}
