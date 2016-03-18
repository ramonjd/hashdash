import Rx from 'rx'
import update from 'react/lib/update'
import IntentPolo from '../intent/polo'

let subject = new Rx.ReplaySubject(1)

let state = {
  polo : {
      lastUpdated: null,
      data : {}
  }
}

IntentPolo.poloSubjects.getFeed.subscribe(data => {
  state = update(state, {
    $merge: {
      data: data,
      lastUpdated : new Date()
    }
  });
  subject.onNext(state)
});



subject.onNext(state)

export default {
  subject
}
