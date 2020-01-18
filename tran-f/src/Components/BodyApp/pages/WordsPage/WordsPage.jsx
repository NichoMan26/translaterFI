import React, { useState } from 'react'
import cls from  './WordsPage.module.css'
import Word from './Word/Word'
import Statistics from './Statistics/Statistics'


const WordsPage = (props) => {
    const [words, setWords] = useState(props.app.words.words) // stay arr with words
    const increaseCount = () => {// 
        props.updateScore(props.app.score + 1)
    }
  
    let number = Math.floor(Math.random() * (words.length)) // rendom number for choosen word from arr with words
    const deleteExecutedWord = () => { // delete words from currentArr
        let newWords = words.filter((w,idx)=>{ // new aar with words
            if (idx !== number)  return w
        })
        if(newWords.length === 0){
            if(props.app.mode === 'exam'){
                props.setNewScore(props.app.words.keyName, props.app.score)
            }
            props.setAppState('finish')
        }
        setWords(newWords)
       
     }

   return(
       <div>
           <Statistics mode={props.app.mode}  count={props.app.score} wordsLength={props.app.wordsLength} />
           <Word increaseCount={increaseCount} 
                mode={props.app.mode}
                wordNumber={number}
                addWrongWord={props.addWrongWord}
                deleteExecutedWord={deleteExecutedWord}
                word={words[number]}/>
       </div>
   )
}
export default WordsPage 