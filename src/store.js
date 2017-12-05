/*
    STEP ONE - import dependencies and reducer
*/
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './ducks/reducer'

/*
    STEP TWO - create and export store

    *   createStore is used to actually create the store (go figure)
    *   applyMiddleware is used to... apply middleware.
    *   the order here is important. Make sure to invoke the middleware!

*/
export default createStore(reducer, applyMiddleware(promiseMiddleware()))