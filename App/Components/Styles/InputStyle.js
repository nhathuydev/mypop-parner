import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: Metrics.paddingHorizontal,
    // backgroundColor: 'green'
  },
  txtLabel: {
    ...Fonts.style.label,
    color: Colors.black,
    paddingVertical: Metrics.baseMargin,
  },
  txtError: {
    ...Fonts.style.inputError,
  },
  input: {
    ...Fonts.style.input,
  },
})
