import { connect } from "react-redux";
import Form from "../../Form/Form";
import { changeInputMessage, sendMessage } from "../../actions/chat";

const mapStateToProps = (state) => ({

    message: state.inputMessage,
});


const mapDispatchToProps = (dispatch) => ({
    setMessage: (newValue) => {
        const action = changeInputMessage(newValue);
        dispatch(action);
    },
    submitMessage: () => {
        dispatch(sendMessage());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form);