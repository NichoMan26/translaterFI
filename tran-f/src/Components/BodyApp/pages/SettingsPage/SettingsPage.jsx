import React from 'react'
import cls from  './SettingsPage.module.css'
import ReduxSettingsForm from './ReduxSettingsForm'


const SettingsPage = (props) => {
  const onSubmit = (dataForm) => {
    console.log('dataForm: ', dataForm);
    let currentWords = dataForm.wordsBlock
    props.setBlockSelected(dataForm.wordsBlock)
    props.setAppMode(dataForm.mode)
    props.addCurrentWords(props.words[currentWords])
    props.setAppState('begin')
  }
  return(
    <div className={cls.wrapper}>
      <ReduxSettingsForm onSubmit={onSubmit} words={props.words}/>
    </div>
  )
}

export default SettingsPage;