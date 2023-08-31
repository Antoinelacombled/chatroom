import { connect } from "react-redux";
import { changeInputOfLogin, submitLogin } from "../../actions/chat";
import Login from "../../Login/login";

const mapStateToProps = (state) => ({
    email: state.inputEmail,
    password: state.inputPassword,
});


const mapDispatchToProps = (dispatch) => ({
    changeValue: (identifier, newValue) => {
        const action = changeInputOfLogin(identifier, newValue);
        dispatch(action);
    },
    submitLogin: () => {
        dispatch(submitLogin);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);