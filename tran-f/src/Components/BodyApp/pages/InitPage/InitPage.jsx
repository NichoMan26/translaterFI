import React from 'react'
import cls from  './InitPage.module.css'

const InitPage = (props) => {
  const appStateStart = () => {
    props.setAppState('start')
  }
  return(
    <div className={cls.wrapper}>
        <h1>Ready to learn Finnish?!</h1>
        <p className={cls.header2}>Rules</p>
        <p className={cls.text}>At the beginning you need to click on the "Start" button. Next, you will need to choose one of two modes: "Exam" or "Learn."</p>
        <p className={cls.text}>“Learn” - the mode allows you to learn words and use hints such as: <br/><br/> 1. When you click on a picture, a word in Finnish will appear. If you use this hint, the word will not be counted as learned and remain in the array of words until you write it without using the hint.<br/><br/> 2. If you type the correct letters with water, then the text will be highlighted in green, if not, then in red. You cannot “Check” the incorrectly entered (red) word.</p>
        <p className={cls.text}>"Exam" - the mode allows you to check to evaluate your acquired knowledge. To do this, select the "Exam" mode and correctly write all the words. In this mode, there is no highlighting of the text to be sent, and you can send any text for verification; for a correctly answered word you will receive one point. Balls will be displayed in the main menu. After the end of the block, you can see the wrong words.</p>
      {props.isMobile 
      ? <button onTouchStart={appStateStart} className={cls.button}>Start</button>
      : <button onClick={appStateStart} className={cls.button}>Start</button>}
    </div>
  )
}
export default InitPage