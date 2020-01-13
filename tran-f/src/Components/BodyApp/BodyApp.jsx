import React from 'react'
import cls from  './BodyApp.module.css'
import InitPage from './pages/InitPage/InitPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import WordsPage from './pages/WordsPage/WordsPage'

const BodyApp = (props) => {
    switch(props.app.appState) {
      case 'init':
        //return <WordsPage app={props.app}/>
        return(<InitPage setAppState={props.setAppState}/>)
      case 'start':
        return(<SettingsPage selectedBlock={props.selectedBlock} 
                             setBlockSelected={props.setBlockSelected}
                             setAppState={props.setAppState}
                             setAppMode={props.setAppMode}
                             addCurrentWords={props.addCurrentWords}
                             words={props.words}/>)
      case 'begin':
        return <WordsPage app={props.app}/>
      default:
        return(<div>nothink <button onTouchStart={() => {props.appSetState('init')}}>stop</button></div>)
    }
}
export default BodyApp 