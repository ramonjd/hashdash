import Rx from 'rx'
// https://github.com/Cmdv/React-RxJS/blob/master/src/intent/json-intent.js
// ::obj.method     ≡ obj.method.bind(obj)
import * as constants from '../constants/'

let subjects = {
  getPoloDataSubject : new Rx.ReplaySubject(1)
}

export default {
  subjects,
  getPoloData: () => {
    subjects.getPoloDataSubject.onNext({
      type: constants.POLO_REQUEST
    })
  }
}
