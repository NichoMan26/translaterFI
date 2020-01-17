const SET_APP_STATE = 'SET_APP_STATE'
const SET_USER_NAME = 'SET_USER_NAME'
const SET_APP_MODE = 'SET_APP_MODE'
const ADD_CURRENT_BLOCK = 'ADD_CURRENT_BLOCK'
const UPDATE_SCORE = 'UPDATE_SCORE'
// const DELETE_WORD_FROM_ARR_WORDS = 'DELETE_WORD_FROM_ARR_WORDS'

///////********************/////////////
let nameLS 
localStorage.appFiName ? nameLS = localStorage.appFiName : nameLS = ''
let initState = {
    userName: nameLS,
    words: [],
    wordsLength:0,
    appRun:false,
    appState:'init',//init, start, brgin, finish
    mode:null,
    score: 0,
    useHelp:false,
}
const appReducer = (state = initState, action) => {
    switch(action.type){
        case SET_APP_STATE:// init state
            return {...state, appState:action.appState?action.appState:'init'}
        case SET_USER_NAME: // Init User name 
            localStorage.setItem('appFiName', action.userName)
            return {...state, userName:action.userName}
        case SET_APP_MODE: // Set App mode
            return {...state, mode:action.appMode}
        case ADD_CURRENT_BLOCK: // Init block how's was chessen by user
            return {...state, words:action.currentWords, wordsLength:action.currentWords.words.length}
        case ADD_CURRENT_BLOCK: // Init block how's was chessen by user
            return {...state, words:action.currentWords, wordsLength:action.currentWords.words.length}
        case UPDATE_SCORE: // change count score
            return {...state, score:action.score}
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
export const updateScore = (score) => ({type:UPDATE_SCORE, score})
// export const deleteExecutedWord = (wordNumber) => ({type:DELETE_WORD_FROM_ARR_WORDS, wordNumber})
export default appReducer