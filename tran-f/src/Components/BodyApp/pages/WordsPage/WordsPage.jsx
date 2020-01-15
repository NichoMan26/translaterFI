import React, { useState } from 'react'
import cls from  './WordsPage.module.css'
import Word from './Word/Word'
import Statistics from './Statistics/Statistics'


const WordsPage = (props) => {
    const [words, setWords] = useState(props.app.words.words)
    const [count, setCount] = useState(0)
    const increaseCount = () => {
        setCount(count + 1)
    }
    let number = Math.floor(Math.random() * (words.length))
    const deleteExecutedWord = () => {
        let newWords = words.filter((w,idx)=>{
            if (idx !== number)  return w
        })
        setWords(newWords)
    }
   return(
       <div>
           <Statistics mode={props.app.mode} count={count} wordsLength={props.app.wordsLength} />
           <Word increaseCount={increaseCount} 
                mode={props.app.mode}
                wordNumber={number}
                deleteExecutedWord={deleteExecutedWord}
                word={words[number]}/>
       </div>
   )
}
export default WordsPage 