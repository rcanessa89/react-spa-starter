import { IStore } from '@interfaces';
import { triggerTransition } from '@uirouter/redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {  IRouterDispatch, IRouterState } from './interfaces';

const mapStateToProps = ({ router }: IStore): IRouterState => router;

const mapDispatchToProps = (dispatch: Dispatch): IRouterDispatch => ({
  triggerTransition: (to: string, params: any = null) =>  dispatch(triggerTransition(to, params)),
});

export default connect<IRouterState>(mapStateToProps, mapDispatchToProps);
