import { connect } from "react-redux";
import Message from "../../Messages/Message";

const mapStateToProps = (state, ownProps) => ({

    isMine: state.pseudo === ownProps.author,

});


const mapDispatchToProps = (dispatch) => {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Message);