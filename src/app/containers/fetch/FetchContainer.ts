import { IStore } from '@interfaces';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { FetchAction, fetchData, fetchDataCancel } from './actions';
import { IFetchDataPayload, IFetchDispatch, IFetchState } from './interfaces';

const mapStateToProps = ({ fetch }: IStore): IFetchState => fetch;

const mapDispatchToProps = (dispatch: Dispatch<FetchAction>): IFetchDispatch => ({
  fetchData: (payload: IFetchDataPayload) => dispatch(fetchData(payload)),
  fetchDataCancel: () => dispatch(fetchDataCancel()),
});

export default connect<IFetchState, IFetchDispatch>(mapStateToProps, mapDispatchToProps);
