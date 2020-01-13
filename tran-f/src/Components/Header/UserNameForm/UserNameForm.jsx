import React from 'react'
import cls from './UserNameForm.module.css'
import {reduxForm, Field} from 'redux-form'

const UserNameForm = (props) => {
   return(
       <form onSubmit={props.handleSubmit} className={cls.wrapper}>
           {/* <h2 className={cls.header}>Enter your name</h2> */}
           <Field className={cls.input} placeholder='Enter your name' name={'userName'} type="text" component={'input'}/>
           <button className={cls.button}>Sent</button>
       </form>
   )
    
}
const ReduxUserNameForm = reduxForm({form:'userName'})(UserNameForm)
export default ReduxUserNameForm; 