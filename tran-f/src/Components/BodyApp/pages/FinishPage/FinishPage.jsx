import React from 'react'
import cls from  './FinishPage.module.css'
import background from '../../../../assets/img/salut.gif'
import FinishButtons from './FinishButtons/FinishButtons'

const FinishPage = (props) => {
    let interest = (+props.app.score / +props.app.wordsLength * 100).toFixed(1)
    if(props.app.mode === 'exam' && props.app.score > +props.app.words.score){
        let wordsKey
        for(let key in props.words) {
            if(props.words[key].id === props.app.words.id){
                wordsKey = key
            }
        }
        props.setNewScore(wordsKey, props.app.score)    
        }
   return(
       <div className={cls.wrapper}>
           <div className={cls.backgroundWrapper}><img src={background} alt="salut"/></div>
           <h1 className={cls.header}>Oikein hyvä</h1>
           {props.app.mode === 'exam' 
           ? <p className={cls.textBlock}>You finish "
                {props.app.words.name}
                "<br/> with score: 
                <span className={cls.number}> {props.app.score}</span>
                .<br/> This is 
                <span className={cls.number}> {interest}</span>
                % of success.
            </p>
           : null }
           <FinishButtons mode={props.app.mode} 
                        setStateInit={props.setStateInit} 
                        setAppState={props.setAppState}/>
       </div>
   )
}
export default FinishPage 