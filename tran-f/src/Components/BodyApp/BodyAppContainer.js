import {connect} from 'react-redux'
import BodyApp from './BodyApp'
import { setAppState, setAppMode, addCurrentWords, 
        updateScore, addWrongWord,  setStateInit} from '../../redux/appReducer'
import {setBlockSelected, setNewScore} from '../../redux/wordsReducer'

let mapStateToProps = (state) => {
    return{
        app: state.appData,
        words:state.words.wordsBlock,
        selectedBlock:state.words.selectedBlock
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setAppState:(appState) => {
            dispatch(setAppState(appState));
        },
        setBlockSelected:(selectedBlock) => {
            dispatch(setBlockSelected(selectedBlock))
        },
        setAppMode:(appMode) => {
            dispatch(setAppMode(appMode))
        },
        addCurrentWords:(currentWords) => {
            dispatch(addCurrentWords(currentWords))
        },
        updateScore:(score) => {
            dispatch(updateScore(score))
        },
        addWrongWord:(wrongWord) => {
            dispatch(addWrongWord(wrongWord))
        },
        setNewScore:(keyName, score) => {
            dispatch(setNewScore(keyName, score))
        },
        setStateInit:() => {
            dispatch(setStateInit())
        },
        
    }
}
export default connect(mapStateToProps,  mapDispatchToProps)(BodyApp)