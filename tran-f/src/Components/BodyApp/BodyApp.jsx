import React from 'react'
import cls from  './BodyApp.module.css'
import InitPage from './pages/InitPage/InitPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import WordsPage from './pages/WordsPage/WordsPage'
import FinishPage from './pages/FinishPage/FinishPage'
import ResultPage from './pages/ResultPage/ResultPage'

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
        return <WordsPage app={props.app}
                          setNewScore={props.setNewScore}
                          addWrongWord={props.addWrongWord}
                          updateScore={props.updateScore}
                          setAppState={props.setAppState}
                          />
       
      case 'finish':
        return (<FinishPage app={props.app}
                            words={props.words}
                            setAppState={props.setAppState}
                            setStateInit={props.setStateInit}
                            setNewScore={props.setNewScore}
                            />)
      case 'result':
        return (<ResultPage app={props.app}
                            setAppState={props.setAppState}
                            setStateInit={props.setStateInit}
          /> )
      default:
        return(<div>nothink <button onTouchStart={() => {props.appSetState('init')}} >Try again</button></div>)
    }
}
export default BodyApp 