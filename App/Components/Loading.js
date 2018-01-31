import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native'
import styles from './Styles/LoadingStyle'
import {Colors} from '../Themes'

export default class Loading extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating color={Colors.orange}/>
      </View>
    )
  }
}
