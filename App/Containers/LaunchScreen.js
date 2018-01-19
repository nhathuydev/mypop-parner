import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  // static navigationOptions = {

  // }
  componentDidMount() {
    const { navigation } = this.props;
    // navigation.navigate('SAuthGeneral')
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logoWithText} style={styles.logo} />
          </View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                key: null,
                actions: [
                  NavigationActions.navigate({ routeName: 'MainTabs' })
                ]
              }))
            }}
          >
            <Text>Go main</Text>
          </TouchableOpacity>

          {
            false && <DevscreensButton />
          }
        </ScrollView>
      </View>
    )
  }
}
