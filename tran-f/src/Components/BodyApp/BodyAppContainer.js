import {connect} from 'react-redux'
import BodyApp from './BodyApp'
import { setAppState, setAppMode, addCurrentWords , deleteExecutedWord} from '../../redux/appReducer'
import {setBlockSelected} from '../../redux/wordsReducer'

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
        
    }
}
export default connect(mapStateToProps,  mapDispatchToProps)(BodyApp)