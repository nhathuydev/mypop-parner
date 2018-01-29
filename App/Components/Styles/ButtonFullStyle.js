import { StyleSheet } from 'react-native'
import {Colors, Metrics} from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    height: 56,
    backgroundColor: Colors.orange,

    borderRadius: Metrics.buttonRadius,
  },
  txtContent: {
    color: Colors.white,
  },
})
