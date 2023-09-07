import { connect } from "react-redux";
import App from "../../App";
import { connectWebSocket } from "../../actions/chat";

const mapStateToProps = (state) => ({
    authentified: state.authentified,
    loading: state.loading
});


const mapDispatchToProps = (dispatch) => ({
    connect: () => {
        dispatch(connectWebSocket());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);