import React from 'react'
import cls from  './BodyApp.module.css'
import InitPage from './pages/InitPage/InitPage'

const BodyApp = (props) => {
    switch(props.app.appState) {
      case 'init':
        return(<InitPage/>)
      case 'play':
        return(<div>rules <button onTouchStart={() => {props.appSetState('start')}}>stop</button></div>)
      default:
        return(<div>nothink <button onTouchStart={() => {props.appSetState('init')}}>stop</button></div>)
    }
}
export default BodyApp 