import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/InputStyle'

export default class Input extends Component {
  // Prop type warnings
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }

  // Defaults for props
  static defaultProps = {
    label: null,
    placeholder: null,
    error: false,
  }

  render() {
    const { label, placeholder, error } = this.props
    return (
      <View style={styles.container}>
        {
          !!label && <Text style={styles.txtLabel}>{label}</Text>
        }
        <TextInput
          style={styles.input}
          placeholder={placeholder}
        />
        {
          !!error && <Text style={styles.txtError}>{error}</Text>
        }
      </View>
    )
  }
}
