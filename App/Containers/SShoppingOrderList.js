import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Other Component
import Icon from 'react-native-vector-icons/FontAwesome'

// Styles
import { Colors } from '../Themes'
import styles from './Styles/SShoppingOrderListStyle'

class SShoppingOrderList extends Component {
  static navigationOptions = {
    title: 'Đơn hàng',
    tabBarIcon: <Icon name={'shopping-cart'} color={Colors.white} size={24} />
  };
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>SShoppingOrderList Container</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SShoppingOrderList)
