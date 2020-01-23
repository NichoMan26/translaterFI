import React, {useState} from 'react'
import cls from  './Word.module.css'

import ReduxWordForm from './wordForm/WordForm'
import { reset } from 'redux-form'


const Word = (props) => {
    let w = props.word
    const [answer, setAnswer] = useState('')
    const [help, setHelp] = useState(false)
    const useHelp = () => {
        setHelp(true)
    }
    const answerChange = (newValue) => {// if answer change
        setAnswer(newValue)
    }
    const checkAnswer = () => {// slice cut 'fi' word for length user answer and compares.
        return w.fi.slice(0, answer.length) === answer ? true : false 
    }
    const onSubmit = (dataForm, dispatch) => {
        if(dataForm.wordAnswer.toLowerCase() === props.word.fi){
            dispatch(reset('wordAnswer'));
            if(props.mode === 'exam' || !help){
                props.increaseCount()
                props.deleteExecutedWord()
            }
            props.changeNumber()
            setHelp(false)
        } else {
            if(props.mode === 'exam'){
                props.addWrongWord({wrong:dataForm.wordAnswer, properly:w.fi})
                dispatch(reset('wordAnswer'));
                props.deleteExecutedWord()
            } 
        }
        
      }

   return(
       <div className={cls.wrapper}>
           {props.isMobile
                ? <div onTouchStart={useHelp} className={cls.imgWrapper}>
                    <img  className={cls.img} src={w.img} alt={w.fi}/>
                    {props.mode ==='study' 
                        ? <div className={help 
                            ? `${cls.helpWrapper} ${cls.helpWrapper_active}` 
                            : cls.helpWrapper}>
                            <span className={cls.helpText}>{w.fi}</span>
                        </div> 
                        : null}
                </div>
               : <div onClick={useHelp} className={cls.imgWrapper}>
                   <img className={cls.img} src={w.img} alt={w.fi} />
                   {props.mode === 'study'
                       ? <div className={help
                           ? `${cls.helpWrapper} ${cls.helpWrapper_active}`
                           : cls.helpWrapper}>
                           <span className={cls.helpText}>{w.fi}</span>
                       </div>
                       : null}
               </div>}
           
           <p className={cls.word}>{w.en}</p>
           <ReduxWordForm answer={answer}
                          word={w}
                          mode={props.mode}
                          checkAnswer={checkAnswer}
                          answerChange={answerChange} 
                          onSubmit={onSubmit}/>
       </div>
   )
}
export default Word 