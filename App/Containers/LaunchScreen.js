import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import UserActions from '../Redux/UserRedux'
import GitActions from '../Redux/GithubRedux'

import { Images } from '../Themes'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ButtonFull } from "../Components";
// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name={'bug'}
        size={24}
      />
    ),
  }
  componentDidMount() {
    const { navigation } = this.props;
    // navigation.navigate('MainTabs')
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logoWithText} style={styles.logo} />
          </View>

          <Text style={{marginVertical: 30}}>
            {JSON.stringify(this.props.user)}
          </Text>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.dispatch(NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({routeName: 'MainTabs'})
                ]
              }))
            }}
          >
            <Text>Go main</Text>
          </TouchableOpacity> */}

          <ButtonFull
            text={'LOGIN'}
            onPress={() => this.props.login('0937417027', 'Aa123456$')}
            // onPress={() => this.props.userRequest('0937417027')}
          />
          {
            false && <DevscreensButton />
          }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  // startup: () => dispatch(StartupActions.startup())
  login: (login, secret) => dispatch(UserActions.userLogin(login, secret)),
  // userRequest: UserActions.userRequest,

  // userRequest
})
export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
