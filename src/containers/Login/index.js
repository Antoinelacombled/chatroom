import { connect } from "react-redux";
import Login from "../../Login/login";

const mapStateToProps = (state) => ({
    email: state.inputEmail,
    password: state.inputPassword,
});


const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);