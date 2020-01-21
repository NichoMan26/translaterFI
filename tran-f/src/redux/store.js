import { createStore, combineReducers } from '../../node_modules/redux'
import appReducer from './appReducer'
import appNameReducer from './appNameReducer'
import wordsReducer from './wordsReducer'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    appName: appNameReducer,
    appData: appReducer,
    words: wordsReducer,
    form:formReducer,
})
let store = createStore(reducers)

window.store = store
export default store