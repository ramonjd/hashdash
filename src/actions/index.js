import * as constants from '../constants/'
import axios from 'axios'
import Rx from 'rx'
//import Rx from 'rx-dom'
let requestStream = null
let responseStream = null

// https://xgrommx.github.io/rx-book/why_rx.html
function poloRequest() {
    return {
        type: constants.POLO_REQUEST
    }
}

function poloSuccess(data) {
    return {
        type: constants.POLO_SUCCESS,
        data
    }
}

function poloFailure() {
    return {
        type: constants.POLO_FAILURE
    }
}

export function subscribe() {
    return (dispatch) => {
        dispatch(poloRequest())

        requestStream = Rx.Observable.interval( 5000 )

        responseStream = requestStream
          .flatMap(() => {
            return Rx.Observable.fromPromise(axios.get('https://poloniex.com/public?command=returnTicker'))
          })
        responseStream.subscribe(function(response) {
            dispatch(poloSuccess(response.data))
        })

    }
}

// export function unsubscribe(query) {
//     return (dispatch) => {
//         dispatch(poloRequest())
//         return axios.get('https://poloniex.com/public?command=returnTicker').then((response) => {
//             dispatch(poloSuccess(response.data))
//         }).catch((response) => {
//             dispatch(poloFailure(response))
//         })
//     }
// }
