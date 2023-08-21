import { connect } from "react-redux";
import Settings from "../../Settings/Settings";
import { changeInputPseudo, savePseudo } from "../../actions/chat";

const mapStateToProps = (state, savePseudo) => ({

    value: state.inputPseudo,
});


const mapDispatchToProps = (dispatch) => {
    return {
        setValue: (newValue) => {
            dispatch(changeInputPseudo(newValue));
        },
        saveValue: () => {
            dispatch(savePseudo());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Settings);