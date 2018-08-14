import { authOff, authRequestFailed, authRequestSuccess } from '@actions/auth';
import { FetchAction, fetchData } from '@actions/fetch';
import { IAuthCredentials, IStore } from '@interfaces';
import { connect, Dispatch } from 'react-redux';

const mapStateToProps = ({ auth }: IStore) => auth;

const mapDispatchToProps = (dispatch: Dispatch<FetchAction>) => ({
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
