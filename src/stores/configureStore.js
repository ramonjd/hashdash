import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/'

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/', () => {
            const nextRootReducer = require('../reducers/')
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}

// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from '../reducers/';
// import { persistState } from 'redux-devtools';
//
// export default function configureStore(initialState) {
//
//   let enhancer;
//   const middleware = applyMiddleware();
//
//   if (process.env.NODE_ENV !== 'production') {
//
//     let getDebugSessionKey = function () {
//       // By default we try to read the key from ?debug_session=<key> in the address bar
//       const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
//       return (matches && matches.length) ? matches[1] : null;
//     };
//
//     enhancer = compose(
//
//       // Middleware we want to use in development
//       middleware,
//       window.devToolsExtension ?
//         window.devToolsExtension() :
//         require('../containers/DevTools').default.instrument(),
//
//       // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
//       persistState(getDebugSessionKey())
//     );
//   } else {
//     enhancer = compose(middleware);
//   }
//
//   const store = createStore(rootReducer, initialState, enhancer);
//
//   // Enable Webpack hot module replacement for reducers
//   if (module.hot) {
//     module.hot.accept('../reducers/', () =>
//       store.replaceReducer(require('../reducers').default)
//     );
//   }
//
//   return store;
// }
