import { connect } from "react-redux";
import App from "../../App";

const mapStateToProps = (state) => ({
authentified: state.authentified,
});


const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);