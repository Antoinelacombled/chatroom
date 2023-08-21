import { connect } from "react-redux";
import Messages from "../../Messages/Messages";

const mapStateToProps = (state) => ({

    messages: state.messages,
});


const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Messages);