import React, { Component } from 'react'
import { ScrollView, Text, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Other component
import Icon from 'react-native-vector-icons/FontAwesome'
import LRequest from './LRequest'
// Styles
import { Colors } from '../Themes'
import styles from './Styles/SRequestListStyle'

class SRequestList extends Component {
  static navigationOptions = {
    title: 'Giao dịch',
    tabBarIcon: <Icon name={'book'} color={Colors.white} size={24} />
  };
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <LRequest />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SRequestList)
