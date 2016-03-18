import Rx from 'rx'
import axios from 'axios'
// https://github.com/Cmdv/React-RxJS/blob/master/src/intent/json-intent.js
// ::obj.method     ≡ obj.method.bind(obj)


var poloSubjects = {
  getFeed: new Rx.Subject()
}

var requestPolo = () => {
  return Rx.Observable.fromPromise(axios.get('https://poloniex.com/public?command=returnTicker')
}

export default {
  poloSubjects,
  get: () =>  requestPolo.subscribe(::poloSubjects.getFeed.onNext)
}
