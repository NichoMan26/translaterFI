import React, {useState} from 'react'
import cls from  './Word.module.css'


const Word = (props) => {
    let w = props.word
    const [answer, setAnswer] = useState('')
    const [help, setHelp] = useState(false)
    const useHelp = () => {
        setHelp(help ? false : true)
         //Add helpCount
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
           <input type="text"/>
           <button>check</button>
       </div>
   )
}
export default Word 