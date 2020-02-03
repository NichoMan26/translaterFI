import React from 'react'
import cls from './MenuItem.module.css'

const MenuItem = (props) => {
    return(<>
        {props.isMobile
            ? <li onTouchStart={(mode) => {props.handleEvent(props.eventValue)}} className={cls.li}>
                <span className={cls.menuText}>{props.text}</span>
                <span className={props.isMenu ? `${cls.menuIcon} ${cls.menuIcon_menu}` : cls.menuIcon}>
                   {props.icon}
                </span>
                </li>
            : <li onClick={(mode) => {props.handleEvent(props.eventValue)}} className={cls.li}>
                <span className={cls.menuText}>{props.text}</span>
                <span className={props.isMenu ? `${cls.menuIcon} ${cls.menuIcon_menu}` : cls.menuIcon}>
                    {props.icon}
                </span>
            </li>}
        </>)
}
export default MenuItem