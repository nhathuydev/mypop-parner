import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import UserActions from '../Redux/UserRedux'

import { ButtonFull, Input, } from '../Components'
// Styles
import styles from './Styles/SLoginStyle'

class Login extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  static navigationOptions = {
    title: 'Login',
  }

  render() {
    const {login} = this.props
    return (
      <ScrollView style={styles.container}>
        <Input
          label={'Phone'}
          placeholder={'type your phone hereeeeee...'}
        />
        <Input
          label={'Password'}
          placeholder={'type your password hereeeeee...'}
        />
        <ButtonFull
          text={'Login'} onPress={login}/>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (login, secret) => dispatch(UserActions.userLogin(login, secret)),
  logout: () => dispatch(UserActions.userLogout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
