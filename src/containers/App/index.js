import { connect } from "react-redux";
import App from "../../App";

const mapStateToProps = (state) => ({
authentified: state.authentified,
loading: state.loading
});


const mapDispatchToProps = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);