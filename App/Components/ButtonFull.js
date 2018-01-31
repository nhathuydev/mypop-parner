import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/ButtonFullStyle'

export default class ButtonFull extends Component {
  // // Prop type warnings
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
  }
  //
  // // Defaults for props
  static defaultProps = {
    text: null,
    onPress: null,
  }

  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text style={styles.txtContent}>{text}</Text>
      </TouchableOpacity>
    )
  }
}
