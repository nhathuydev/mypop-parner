import { StackNavigator, TabNavigator } from 'react-navigation'
import SRequestList from '../Containers/SRequestList'
import SAuthGeneral from '../Containers/SAuthGeneral'
import ScreenTest from '../Containers/ScreenTest'
// import Login from '../Containers/Login'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

const MainTabs = TabNavigator({
  SRequestList: { screen: SRequestList },
})
// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SAuthGeneral: { screen: SAuthGeneral },
  ScreenTest: { screen: ScreenTest },
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: {
      visible: false,
      header: null,
    },
    header: null,
  },
  MainTabs: {
    screen: MainTabs,
  },
}, {
    // Default config for all screens
    headerMode: 'screen',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default PrimaryNav
