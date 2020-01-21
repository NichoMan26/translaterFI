import React from 'react'
import cls from './Header.module.css'
import UserName from './UserName/UserName'

const Header = (props) => {
    return (
        <header className={cls.wrapper}>
            <UserName setUserName={props.setUserName}
                        appState={props.app.appState}
                        userName={props.appName.userName}/>
        </header>
    )
}
export default Header