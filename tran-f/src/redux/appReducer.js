const SET_APP_STATE = 'SET_APP_STATE'
const SET_USER_NAME = 'SET_USER_NAME'
const SET_APP_MODE = 'SET_APP_MODE'
const ADD_CURRENT_BLOCK = 'ADD_CURRENT_BLOCK'
// const DELETE_WORD_FROM_ARR_WORDS = 'DELETE_WORD_FROM_ARR_WORDS'

let initState = {
    userName: 'a',
    words: [],
    wordsLength:0,
    appRun:false,
    appState:'init',
    mode:'study',
    count: 0,
    useHelp:false,
}
const appReducer = (state = initState, action) => {
    switch(action.type){
        case SET_APP_STATE:// init state
            return {...state, appState:action.appState?action.appState:'init'}
        case SET_USER_NAME: // Init User name 
            return {...state, userName:action.userName}
        case SET_APP_MODE: // Set App mode
            return {...state, mode:action.appMode}
        case ADD_CURRENT_BLOCK: // Init block how's was chessen by user
            return {...state, words:action.currentWords, wordsLength:action.currentWords.words.length}
        // case DELETE_WORD_FROM_ARR_WORDS: // Dellete word from array if this word was executed
        //     return {...state, words:{...state.words, words:[...state.words.words.filter((w,idx)=>{
        //         if (idx !== action.wordNumber)  return w
        //     })]}}
        default:
            return state
    }
}

export const appUserName = (userName) => ({type:SET_USER_NAME, userName})
export const setAppState = (appState) => ({type:SET_APP_STATE, appState})
export const setAppMode = (appMode) => ({type:SET_APP_MODE, appMode})
export const addCurrentWords = (currentWords) => ({type:ADD_CURRENT_BLOCK, currentWords})
// export const deleteExecutedWord = (wordNumber) => ({type:DELETE_WORD_FROM_ARR_WORDS, wordNumber})
export default appReducer