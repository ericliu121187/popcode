import {connect} from 'react-redux';
import config from '../config';
import {confirmIdentity, rejectIdentity} from '../actions/user';
import IdentityConfirmation from '../components/IdentityConfirmation';
import {getCurrentUser} from '../selectors';
import {signOut} from '../clients/firebase';

function makeMapStateToProps() {
  return function mapStateToProps(state) {
    return {
      currentUser: getCurrentUser(state),
    };
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onConfirmIdentity() {
      dispatch(confirmIdentity());
    },

    onRejectIdentity(e) {
      e.preventDefault();

      window.open(config.gitHubLogoutUrl, '_blank');
      signOut();
      dispatch(rejectIdentity());
    },
  };
}

export default connect(
  makeMapStateToProps,
  mapDispatchToProps,
)(IdentityConfirmation);