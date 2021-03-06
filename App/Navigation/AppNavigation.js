import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import SSelectShop from '../Containers/SSelectShop'
import SShoppingOrderList from '../Containers/SShoppingOrderList'
import SRequestList from '../Containers/SRequestList'
import SAuthGeneral from '../Containers/SAuthGeneral'
import SLogin from '../Containers/SLogin'
import ScreenTest from '../Containers/ScreenTest'
// import Login from '../Containers/Login'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import { Colors } from '../Themes'


// import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const tabConfig = {
  tabBarPosition: 'bottom',
  lazy: true,
  swipeEnabled: true,
  // backBehavior: 'initialRoute',
  tabBarOptions: {
    activeTintColor: Colors.white,
    style: {
      backgroundColor: Colors.orange,
    },
    indicatorStyle: {
      backgroundColor: Colors.purpleBrown,
    },
    showIcon: true,
    showLabel: false,
  },
  initialRouteName: 'SRequestList',
}
const stackConfig = {
  headerMode: 'screen',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
}
const MainTabs = TabNavigator({
  SRequestList: {
    screen: SRequestList
  },
  SShoppingOrderList: { screen: SShoppingOrderList },
}, tabConfig)
// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SSelectShop: { screen: SSelectShop },
  LoginScreen: { screen: SLogin },
  SAuthGeneral: { screen: SAuthGeneral },
  ScreenTest: { screen: ScreenTest },
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: {
      visible: false,
      header: null,
    },
  },
  MainTabs: {
    screen: MainTabs
  },
}, stackConfig)

const DrawerNav = DrawerNavigator({
  SRequestList: {
    screen: SRequestList
  },
  SShoppingOrderList: { screen: SShoppingOrderList },
});
export default PrimaryNav
