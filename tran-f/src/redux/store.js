import { createStore, combineReducers } from '../../node_modules/redux'
import appReducer from './appReducer'
//import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    appData: appReducer
})
let store = createStore(reducers)

window.store = store
export default store