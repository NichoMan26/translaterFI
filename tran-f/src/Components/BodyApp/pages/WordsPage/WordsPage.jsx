import React, { useState } from 'react'
import cls from  './WordsPage.module.css'
import Word from './Word/Word'


const WordsPage = (props) => {
    const [words, setWords] = useState(props.app.words.words)
    let number = Math.floor(Math.random() * (words.length))
   return(
       <div>
           <Word word={words[number]}/>
       </div>
   )
}
export default WordsPage 