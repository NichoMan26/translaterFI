import React from 'react'
import cls from './Header.module.css'
import UserName from './UserName/UserName'

const Header = (props) => {
    console.log('props: ', props.app);
    

    return (
        <header className={cls.wrapper}>
            <UserName userName={props.app.userName}/>
        </header>
    )
}
export default Header