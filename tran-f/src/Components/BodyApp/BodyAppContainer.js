import {connect} from 'react-redux'
import BodyApp from './BodyApp'
import { appSetState } from '../../redux/appReducer'

let mapStateToProps = (state) => {
    return{
        app: state.appData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        appSetState: (appState) => {
            dispatch(appSetState(appState));
        }
    }
}
export default connect(mapStateToProps,  mapDispatchToProps)(BodyApp)