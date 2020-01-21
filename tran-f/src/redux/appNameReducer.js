const SET_USER_NAME = 'SET_USER_NAME'

let nameLS 
localStorage.appFiName ? nameLS = localStorage.appFiName : nameLS = ''
let initState = {
    userName: nameLS,
   }
const appNameReducer = (state = initState, action) => {
    switch(action.type){
        case SET_USER_NAME: // Init User name 
            localStorage.setItem('appFiName', action.userName)
            return {...state, userName:action.userName}
        default:
            return state
    }
}
export const appUserName = (userName) => ({type:SET_USER_NAME, userName})

export default appNameReducer