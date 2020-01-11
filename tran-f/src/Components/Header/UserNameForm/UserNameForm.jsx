import React from 'react'
import cls from './UserNameForm.module.css'

const UserNameForm = (props) => {
   return(
       <form className={cls.wrapper}>
           <input type="text"/>
           <button>Sent</button>
       </form>
   )
    
}
export default UserNameForm;