const SET_APP_STATE = 'SET_APP_STATE'

let initState = {
    userName: null,
    words: [],
    appRun:false,
    appState:'init',
    count: 0,
    useHelp:false,
}
const appReducer = (state = initState, action) => {
    switch(action.type){
        case SET_APP_STATE:
            return {...state, appState:action.appState}

        default:
            return state
    }
}

export const appSetState = (appState) => ({type:SET_APP_STATE, appState})
export default appReducer