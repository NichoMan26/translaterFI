import React, {useState} from 'react'
import cls from './UserName.module.css'
import UserNameForm from '../UserNameForm/UserNameForm'

const UserName = (props) => {
    let [editMode, setEditMode] = useState(false)

    const onSubmit = (formData) => {
        props.setUserName(formData.userName)
        setEditModeFalse()
    }
    const setEditModeTrue = () =>{
        setEditMode(true)
    }
    const setEditModeFalse = () =>{
        setEditMode(false)
    }
    if(props.userName && !editMode){
        if(props.isMobile){
            return <div onTouchStart={props.appState === 'init' || props.appState === 'start' 
            ? setEditModeTrue
            : null} className={cls.wrapper}>{props.userName}</div>
        } else {
            return <div onClick={props.appState === 'init' || props.appState === 'start' 
            ? setEditModeTrue
            : null} className={cls.wrapper}>{props.userName}</div>
        }
       
    } else {
        return <UserNameForm userName={props.userName}  onSubmit={onSubmit}/>
    }
    
}
export default UserName;