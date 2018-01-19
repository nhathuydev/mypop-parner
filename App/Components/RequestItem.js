import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/RequestItemStyle'

export default class RequestItem extends Component {
  // Prop type warnings
  static propTypes = {
    name: PropTypes.string,
  }

  // Defaults for props
  static defaultProps = {
    name: '',
  }

  render() {
    const { name } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://avatar.mypop.vn/0/5/2/d/50/120/e8af31a723b3359cbc3dc98b43f684c4' }}
          style={styles.imgAvatar}
        />
        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <Text style={styles.txtName}>{name}</Text>
          <Text style={styles.txtTime}>1 phút trước</Text>
        </View>
        <View>
          <Text style={styles.txtType} >
            Tích điểm
          </Text>
        </View>
      </View>
    )
  }
}
