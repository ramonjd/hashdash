import * as constants from '../constants/'
import axios from 'axios'

// https://xgrommx.github.io/rx-book/why_rx.html
function poloRequest() {
    return {
        type: actionTypes.POLO_REQUEST
    }
}

function poloSuccess(data) {
    return {
        type: actionTypes.POLO_SUCCESS,
        data
    }
}

function poloFailure() {
    return {
        type: actionTypes.POLO_FAILURE
    }
}

export function get(query) {
    return (dispatch) => {
        dispatch(poloRequest())
        return axios.get('https://poloniex.com/public?command=returnTicker').then((response) => {
            dispatch(poloSuccess(response.data))
        }).catch((response) => {
            dispatch(poloFailure(response))
        })
    }
}
