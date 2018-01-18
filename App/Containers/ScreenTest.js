import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import UserActions from '../Redux/UserRedux'

// Styles
import styles from './Styles/ScreenTestStyle'

class ScreenTest extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    const { login } = this.props;
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => login()}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(UserActions.userLogin({ username: 'Huy', password: 'password' }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenTest)
