import React from 'react'
import cls from  './WordForm.module.css'
import { Field, reduxForm} from 'redux-form'
import {required} from '../../../../../../utils/validators/validators'
import {Input} from '../../../../../Common/FieldsControls/FieldsCommon'

const WordForm = (props) => {
    return (
        <form className={cls.wrapper} onSubmit={props.handleSubmit}>
            <Field onChange={(e, newValue) => {props.answerChange(newValue.toLowerCase())}}  
                    placeholder='Enter your answer' 
                    className={props.mode === 'study' 
                    ? props.checkAnswer() ? `${cls.input} ${cls.input_true}` : `${cls.input} ${cls.input_false}`
                    : cls.input} 
                    name={'wordAnswer'} 
                    validate={[required]}
                    type="text" 
                    component={Input}/>
            <button className={cls.button}>Check</button>
        </form>
    )
}

const ReduxWordForm = reduxForm({form:'wordAnswer',})(WordForm)
export default ReduxWordForm 