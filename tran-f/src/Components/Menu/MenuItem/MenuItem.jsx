import React, {useState} from 'react'
import cls from './MenuItem.module.css'
import PopUp from '../../Common/PopUp/PopUp'

const MenuItem = (props) => {  
    

    const checkScorer = () => {
        if(props.isMenu){
            props.handleEvent(props.eventValue)
        } else {
            props.closeMenu()
            if(props.score === 0){
                props.handleEvent(props.eventValue)
            } else {
                props.setIsPopUp(true)
            }
        }
       
       
    }
   
    return(<>
        {<li onTouchStart={checkScorer} className={cls.li}
             onClick={props.isMobile ? null : checkScorer}>
                <span className={cls.menuText}>{props.text}</span>
                <span className={props.isMenu ? `${cls.menuIcon} ${cls.menuIcon_menu}` : cls.menuIcon}>
                   {props.icon}
                </span>
        </li>
            }
        </>)
}
export default MenuItem