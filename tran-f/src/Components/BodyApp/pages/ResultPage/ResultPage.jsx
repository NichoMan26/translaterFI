import React from 'react'
import cls from './ResultPage.module.css'



const ResultPage = (props) => {
    const appStateStart = () => {
        props.setStateInit()
        props.setAppState('start')
      }

    let JSX = props.app.arrWrong.map((obj, idx) => {
        return <li className={cls.blockWords} key={idx}>
                <div className={cls.tableEl}>{obj.wrong}</div>
                <div className={cls.tableEl}>{obj.properly}</div>
             </li>
    })
    return (
        <div className={cls.wrapper}>
            {props.app.arrWrong.length === 0 
            ? <h2 className={cls.headingNoError}>Erinomainen sinulla ei ole virheitä.</h2>
            : null}
            <ul>
                {props.app.arrWrong.length === 0 
                ? null
                : <li className={cls.blockWords}>
                    <div className={cls.tableHeader}>Your word</div>
                    <div className={cls.tableHeader}>Right word</div>
                </li>}
                {JSX}
            </ul>
            <button onTouchStart={appStateStart} className={cls.button}
                    onClick={props.isMobile ? ()=>{} : appStateStart}>
                    Try again
            </button>
        </div>
    )
}


export default ResultPage 