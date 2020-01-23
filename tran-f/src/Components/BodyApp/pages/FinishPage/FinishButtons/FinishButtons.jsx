import React from 'react'
import cls from  './FinishButtons.module.css'

const FinishButtons = (props) => {
  console.log('props: ', props);
    const appStateStart = () => {
      props.setStateInit()
      props.setAppState('start')
    }
    const appStateResult = () => {
      props.setAppState('result')
    }
   return(
    <div className={cls.wrapper}>
      {props.isMobile 
      ? <button onTouchStart={appStateStart} className={cls.button} >Try again</button>
      : <button onClick={appStateStart} className={cls.button} >Try again</button>}
      
      {props.mode === 'exam' 
      ? props.isMobile 
        ? <button onTouchStart={appStateResult} className={cls.button}>See result</button>
        : <button onClick={appStateResult} className={cls.button}>See result</button>
      : null}
    </div>
   )
}
export default FinishButtons 