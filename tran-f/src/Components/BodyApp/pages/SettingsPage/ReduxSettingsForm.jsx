import React from 'react'
import cls from  './ReduxSettingsForm.module.css'
import { Field, reduxForm } from 'redux-form'
import {required} from '../../../../utils/validators/validators'
import {Input} from '../../../Common/FieldsControls/FieldsCommon'

const ExamForm = (props) => {
  let blocks = [] // arr with namr of blocks
    for (let key in props.words){
      let e = props.words[key]
      blocks.push(// push in arr new elements
        <div key={e.id} className={cls.block}>
            <Field className={cls.blockRadio} 
                  type='radio' 
                  name="wordsBlock" 
                  validate={[required]}
                  id={e.id} 
                  value={key} 
                  component={Input} /> 
            <label className={cls.blockLabel} htmlFor={e.id}>
              <p className={cls.wrapperText}>
                <span className={cls.nameBlock}>{e.name}</span>
                <span className={cls.score}>{e.score}/{e.words.length}</span>
              </p>
            </label>
        </div>
      )
    }
    return(
      <form onSubmit={props.handleSubmit} className={cls.wrapper}>
        <p className={cls.text}>Choose in which mode you want to study</p>
        <div className={cls.examWrapper}>
          <div className={cls.inputWrapper}>
            <label className={cls.examLabel} htmlFor="study">Study</label>
            <Field className={cls.examRadio} type='radio' name="mode" id='study' validate={[required]} value='study' component={Input}/>
          </div>
          <div className={cls.inputWrapper}>
            <label className={cls.examLabel} htmlFor="exam">Exam</label>
            <Field className={cls.examRadio} type='radio' name="mode" id='exam' validate={[required]} value='exam' component={Input}/>
          </div>
        </div>
        <div className={cls.wrapper}>
          <p className={cls.text}>Choose which word block you wont study </p>
          <div className={cls.blockWrapper}>
              {blocks}
          </div>
        </div>
        <button className={cls.button}>Let's go</button>
      </form>
    )
  }
  const ReduxSettingsForm = reduxForm({form:'examForm'})(ExamForm)
  export default ReduxSettingsForm