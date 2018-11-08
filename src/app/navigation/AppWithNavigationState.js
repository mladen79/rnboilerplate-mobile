import {
  reduxifyNavigator,
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import RootNavigator from './AppNavigator';

export const navMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);

export const navReducer = createNavigationReducer(RootNavigator);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
