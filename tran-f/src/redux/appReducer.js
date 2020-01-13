const SET_APP_STATE = 'SET_APP_STATE'
const SET_USER_NAME = 'SET_USER_NAME'
const SET_APP_MODE = 'SET_APP_MODE'
const ADD_CURRENT_BLOCK = 'ADD_CURRENT_BLOCK'

let initState = {
    userName: 'a',
    words: [],
    appRun:false,
    appState:'init',
    mode:'study',
    count: 0,
    useHelp:false,
}
const appReducer = (state = initState, action) => {
    switch(action.type){
        case SET_APP_STATE:
            return {...state, appState:action.appState?action.appState:'init'}
        case SET_USER_NAME:
            return {...state, userName:action.userName}
        case SET_APP_MODE:
            return {...state, mode:action.appMode}
        case ADD_CURRENT_BLOCK:
            return {...state, words:action.currentWords}

        default:
            return state
    }
}

export const appUserName = (userName) => ({type:SET_USER_NAME, userName})
export const setAppState = (appState) => ({type:SET_APP_STATE, appState})
export const setAppMode = (appMode) => ({type:SET_APP_MODE, appMode})
export const addCurrentWords = (currentWords) => ({type:ADD_CURRENT_BLOCK, currentWords})
export default appReducer