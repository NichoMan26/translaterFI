import {connect} from 'react-redux'
import Menu from './Menu'
import {setAppState, updateScore} from '../../redux/appReducer'


 let mapStateToProps = (state) => {
    return {
      state:state
    }
 }
 let mapDispatchToProps = (dispatch) => {
  return {
   setAppState:(appState) => {
       dispatch(setAppState(appState));
     },
   setScoreZero:(score) => {
     dispatch(updateScore(score));
     }
   }
 }
  
export default connect(mapStateToProps, mapDispatchToProps)(Menu)