import { connect } from "react-redux";
import Settings from "../../Settings/Settings";

const mapStateToProps = (state) => ({

    value   : state.inputPseudo,
});


const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Settings);