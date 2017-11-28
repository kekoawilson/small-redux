/*
    STEP ONE - import dependencies and reducer
*/
import { createStore } from 'redux'
import reducer from './ducks/reducer'

/*
    STEP TWO - create and export store
*/
export default createStore(reducer)