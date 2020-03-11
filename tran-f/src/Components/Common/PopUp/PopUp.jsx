import React from 'react'
import cls from './PopUp.module.css'

const PopUp = (props) => {
    return (
        <div className={cls.wrapper}>
            <p className={cls.text}>{props.text}</p>
            <div className={cls.buttonWrapper}>
                <button onTouchStart={()=>{props.onHandleTrue('')}} 
                        onClick={props.isMobile ? null : ()=>{props.onHandleTrue('')}}
                        className={cls.button}>
                    {props.buttonTrue}
                </button>
                <button onTouchStart={props.onHandleFalse}
                        onClick={props.isMobile ? null : props.onHandleFalse}
                        className={cls.button}>
                    {props.buttonFalse}
                </button>
            </div>
        </div>
    )
}
export default PopUp;