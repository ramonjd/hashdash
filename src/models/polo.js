import Rx from 'rx'
import update from 'react/lib/update'
import IntentPolo from '../intents/polo'
import axios from 'axios'
import * as constants from '../constants/'

let subject = new Rx.ReplaySubject(1)

let state = {
  lastUpdated: null,
  poloData : {}
}

let getPoloData = () => {
   Rx.Observable.fromPromise(axios.get('https://poloniex.com/public?command=returnTicker')).subscribe(
      response => subject.onNext(update(state, {
        $merge: {
          poloData: response.data,
          lastUpdated : new Date()
        }
      }))
    )
}

IntentPolo.subjects.getPoloDataSubject.subscribe(payload => {
  switch(payload.type) {
    case constants.POLO_REQUEST:
      getPoloData();
      break;
    default:
      console.warn(`${payload.type} not recognized in model.`);
  }
});

subject.onNext(state)

export default {
  subject
}
