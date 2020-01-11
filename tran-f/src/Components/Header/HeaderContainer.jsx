import {connect} from 'react-redux'
import Header from './Header'


let mapStateToProps = (state) => {
    return{
        app: state.appData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect( mapStateToProps,  mapDispatchToProps)(Header)