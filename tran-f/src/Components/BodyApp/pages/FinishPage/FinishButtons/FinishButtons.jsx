import React from 'react'
import cls from  './FinishButtons.module.css'

const FinishButtons = (props) => {
    const appStateStart = () => {
      props.setStateInit()
      props.setAppState('start')
    }
    const appStateResult = () => {
      props.setAppState('result')
    }
   return(
    <div className={cls.wrapper}>
      <button onTouchStart={appStateStart} className={cls.button}>Try again</button>
      {props.mode === 'exam' 
      ? <button onTouchStart={appStateResult} className={cls.button}>See result</button>
      : null}
    </div>
   )
}
export default FinishButtons 