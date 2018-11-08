import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import MainScreen from '../../screens/MainScreen/index';
import ThemeColors from '../../colors/index';

const MainTabNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        tabBarLabel: 'Main'
      }
    }
  },
  {
    navigationOptions: {
      header: false,
      headerLeft: null
    },
    tabBarOptions: {
      activeTintColor: ThemeColors.WHITE,
      inactiveTintColor: ThemeColors.GRAY_LIGHT,
      upperCaseLabel: false,
      labelStyle: {
        margin: 0,
        fontSize: 14,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: ThemeColors.GRAY_LIGHT
      },
      indicatorStyle: {
        backgroundColor: null
      },
      style: {
        backgroundColor: ThemeColors.BLACK
      }
    }
  }
)

const RootNavigator = createStackNavigator(
  {
    Main: MainTabNavigator
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none'
  }
);

export default RootNavigator;
