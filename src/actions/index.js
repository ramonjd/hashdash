import * as constants from '../constants/'
import axios from 'axios'
import Rx from 'rx'

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

export function subscribe(query) {
    return (dispatch) => {
        dispatch(poloRequest())

        let requestStream = Rx.Observable.just('https://api.github.com/users');

var responseStream = requestStream
  .flatMap(function(requestUrl) {
    return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
  });

responseStream.subscribe(function(response) {
  // render `response` to the DOM however you wish
});

        // return axios.get('https://poloniex.com/public?command=returnTicker').then((response) => {
        //     dispatch(poloSuccess(response.data))
        // }).catch((response) => {
        //     dispatch(poloFailure(response))
        // })
    }
}

export function unsubscribe(query) {
    return (dispatch) => {
        dispatch(poloRequest())
        return axios.get('https://poloniex.com/public?command=returnTicker').then((response) => {
            dispatch(poloSuccess(response.data))
        }).catch((response) => {
            dispatch(poloFailure(response))
        })
    }
}
