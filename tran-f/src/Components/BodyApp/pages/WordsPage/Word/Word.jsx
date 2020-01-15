import React, {useState} from 'react'
import cls from  './Word.module.css'
import ReduxWordForm from './wordForm/WordForm'


const Word = (props) => {
    let w = props.word
    const [answer, setAnswer] = useState('')
    const [help, setHelp] = useState(false)
    const useHelp = () => {
        setHelp(help ? false : true)
         //Add helpCount
    }
    const answerChange = (newValue) => {// if answer change
        setAnswer(newValue)
    }
    const checkAnswer = () => {// slice cut 'fi' word for length user answer and compares.
        return w.fi.slice(0, answer.length) === answer ? true : false 
    }
    const onSubmit = (dataForm) => {
        if(dataForm.wordAnswer === props.word.fi){
            props.deleteExecutedWord()
            if(props.mode === 'exam'){
                !help ? props.increaseCount() : null
                
            } else if (props.mode === 'study'){
                props.increaseCount()
            }
            setHelp(false)
        } else {
            console.error('neуа nahdle error')
        }
        
        
      }
   return(
       <div className={cls.wrapper}>
           <div onTouchStart={useHelp} className={cls.imgWrapper}>
               <img  className={cls.img} src={w.img} alt={w.fi}/>
               <div className={help 
                ? `${cls.helpWrapper} ${cls.helpWrapper_active}` 
                : cls.helpWrapper}>
                   <span className={cls.helpText}>{w.fi}</span>
                </div>
           </div>
           <p className={cls.word}>{w.en}</p>
           <ReduxWordForm answer={answer}
                          mode={props.mode}
                          checkAnswer={checkAnswer}
                          answerChange={answerChange} 
                          onSubmit={onSubmit}/>
       </div>
   )
}
export default Word 