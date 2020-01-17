import React from 'react'
import cls from  './FinishPage.module.css'

const FinishPage = (props) => {
    if(props.app.mode === 'exam' && props.app.score > +props.app.words.score){
        let wordsKey
        for(let key in props.words) {
            if(props.words[key].id === props.app.words.id){
                wordsKey = key
            }
        }
        let name = `appFiScore_${wordsKey}`
            localStorage.setItem(`${name}`, props.app.score)
    
        }
   return(
       <div>
           score: {props.app.score}
       </div>
   )
}
export default FinishPage 