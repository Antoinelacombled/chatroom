import { connect } from "react-redux";
import Settings from "../../Settings/Settings";
import { changeInputPseudo, savePseudo } from "../../actions/chat";

const mapStateToProps = (state) => ({
    email: state.inputEmail,
    value: state.inputPseudo,
});


const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (identifier, newValue) => {

        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Settings);