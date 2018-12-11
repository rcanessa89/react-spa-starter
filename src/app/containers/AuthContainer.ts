import { authOff, authRequestFailed, authRequestSuccess, IAuthOff } from '@actions/auth';
import { FetchAction, fetchData } from '@actions/fetch';
import { IAuthCredentials, IStore } from '@interfaces';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = ({ auth }: IStore) => auth;

const mapDispatchToProps = (dispatch: Dispatch<FetchAction | IAuthOff>) => ({
  login: (payload: IAuthCredentials) => dispatch(fetchData({
    failed: authRequestFailed,
    options: {
      body: payload,
      method: 'POST',
      url: '/login',
    },
    success: authRequestSuccess,
  })),
  logout: () => dispatch(authOff()),
});

export default connect(mapStateToProps, mapDispatchToProps);
