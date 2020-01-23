import {connect} from 'react-redux'
import Header from './Header'
import {appUserName} from './../../redux/appNameReducer'



let mapStateToProps = (state) => {
    return{
        appName: state.appName,
        app: state.appData

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setUserName:(userName) => {
            dispatch(appUserName(userName))
        }
    }
}
export default connect( mapStateToProps,  mapDispatchToProps)(Header)