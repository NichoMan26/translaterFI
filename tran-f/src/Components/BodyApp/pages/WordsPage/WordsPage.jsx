import React, { useState, useEffect } from 'react'
import cls from  './WordsPage.module.css'
import Word from './Word/Word'
import Statistics from './Statistics/Statistics'


const WordsPage = (props) => {
    const [words, setWords] = useState(props.app.words.words) // stay arr with words
    
    const [number, setNumber] = useState(Math.floor(Math.random() * (words.length)))  // rendom number for choosen word from arr with words
    
    const increaseCount = () => {// increase score on one
        props.updateScore(props.app.score + 1)
    }
    const changeNumber = () => { // create new rendom number
        setNumber(Math.floor(Math.random() * (words.length)))
    }
    const deleteExecutedWord = () => { // delete words from currentArr
        let newWords = words.filter((w,idx)=>{ // new aar with words
            if (idx !== number)  return w
        })
        if(newWords.length === 0){
            props.setAppState('finish')
        }
        setWords(newWords)
    }
   return(
       <div>
           <Statistics mode={props.app.mode}  count={props.app.score} wordsLength={props.app.wordsLength} />
           <Word increaseCount={increaseCount} 
                mode={props.app.mode}
                isMobile={props.app.isMobile}
                changeNumber={changeNumber}
                words={words}
                addWrongWord={props.addWrongWord}
                deleteExecutedWord={deleteExecutedWord}
                word={words[number]}/>
       </div>
   )
}
export default WordsPage 