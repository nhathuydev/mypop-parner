import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import UserActions from '../Redux/UserRedux'
import GitActions from '../Redux/GithubRedux'

import { Images } from '../Themes'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Loading } from "../Components";
// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  // static navigationOptions = {
  //   drawerLabel: 'Home',
  //   drawerIcon: ({ tintColor }) => (
  //     <Icon
  //       name={'bug'}
  //       size={24}
  //     />
  //   ),
  // }
  state = {
    rehydrate: false,
  }
  componentDidMount() {
    const { navigation } = this.props;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.rehydrate) {
      const resetAction = NavigationActions.reset({
        index: 0,
      })
      if (nextProps.isLogged) {
        resetAction.actions = [
          NavigationActions.navigate({ routeName: 'MainTabs'})
        ]
      } else {
        resetAction.actions = [
          NavigationActions.navigate({ routeName: 'LoginScreen'})
        ]
      }
      this.props.navigation.dispatch(resetAction)
    }
  }
  render() {
    const {navigation, user, isLogged, login, logout} = this.props;
    const {rehydrate} = this.state
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centered}>
          <Image source={Images.logoWithText} style={styles.logo} />
          <Loading/>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  isLogged: state.user && state.user.data && state.user.data.sessionKey,
  rehydrate: state._persist && state._persist.rehydrated,
})

const mapDispatchToProps = (dispatch) => ({
  login: (login, secret) => dispatch(UserActions.userLogin(login, secret)),
  logout: () => dispatch(UserActions.userLogout()),
})
export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
