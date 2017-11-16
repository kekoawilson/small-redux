import { createStore, combineReducers } from 'redux'
import reducer from './ducks/reducer'

export default createStore(reducer)