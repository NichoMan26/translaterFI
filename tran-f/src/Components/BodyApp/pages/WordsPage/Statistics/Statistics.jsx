import React, {useState} from 'react'
import cls from  './Statistics.module.css'


const Statistics = (props) => {
   return(
       <div className={cls.wrapper}>
            <p className={cls.staicWrapper}>
                <span>{props.count}</span>
                 / 
                 <span>{props.wordsLength}</span> 
            </p>
            <p className={cls.staicWrapper}>
                {props.mode}
            </p>
       </div>
   )
}
export default Statistics 