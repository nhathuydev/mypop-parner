import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import { LShop } from '../Components'
// Styles
import styles from './Styles/SSelectShopStyle'

class SSelectShop extends Component {
  static navigationOptions = {
    title: 'Select Shop',
  }
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    const { shops } = this.props

    return (
      <ScrollView style={styles.container}>
        <LShop />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shops: state.shop.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SSelectShop)
