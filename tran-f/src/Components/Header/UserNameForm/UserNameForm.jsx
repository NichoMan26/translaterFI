import React from 'react'
import cls from './UserNameForm.module.css'
import {reduxForm, Field} from 'redux-form'
import {required} from '../../../utils/validators/validators'
import {Input} from '../../Common/FieldsControls/FieldsCommon'

const UserNameForm = (props) => {
   return(
       <form onSubmit={props.handleSubmit} className={cls.wrapper}>
           <Field className={cls.input} placeholder='Enter your name' valedate={[required]} name={'userName'} type="text" component={Input}/>
           <button className={cls.button}>Sent</button>
       </form>
   )
    
}
const ReduxUserNameForm = reduxForm({form:'userName'})(UserNameForm)
export default ReduxUserNameForm; 