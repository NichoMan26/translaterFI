import React from 'react'
import cls from  './MenuButton.module.css'

const MenuButton = (props) => {
    return(
        <div className={cls.wrapper}>
            <div onTouchStart={props.menuOpen ? props.closeMenu  : props.openMenu} className={cls.button}>
                <div className={cls.dote}></div>
                <div className={cls.dote}></div>
                <div className={cls.dote}></div>
            </div>
         </div>
    )
}
export default MenuButton