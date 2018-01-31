import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/InputStyle'

export default class Input extends Component {
  // Prop type warnings
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
  }
  
  // Defaults for props
  static defaultProps = {
    label: null,
    placeholder: null,
  }

  render () {
    const { label, placeholder } = this.props
    return (
      <View style={styles.container}>
        {
          !!label && <Text style={styles.txtLabel}>{label}</Text>
        }
        <TextInput
          style={styles.input}
          placeholder={placeholder}
        />
      </View>
    )
  }
}
