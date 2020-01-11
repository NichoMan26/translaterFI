import React from 'react'
import cls from './UserName.module.css'
import UserNameForm from '../UserNameForm/UserNameForm'

const UserName = (props) => {
    if(props.userName){
        return <div className={cls.wrapper}>{props.userName}</div>
    } else {
        return <UserNameForm/>
    }
    
}
export default UserName;