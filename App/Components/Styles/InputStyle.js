import { StyleSheet } from 'react-native'
import { Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: Metrics.paddingHorizontal,
    // backgroundColor: 'green'
  },
  txtLabel: {
    // backgroundColor: 'red',
    ...Fonts.style.label,
    paddingVertical: Metrics.baseMargin,
  },
  txtError: {

  },
  input: {
    ...Fonts.style.input,
  },
})
