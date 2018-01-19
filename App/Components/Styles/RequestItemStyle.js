import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  imgAvatar: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  txtName: {
    ...Fonts.style.h5,
    color: Colors.black,
  },
  txtTime: {
    ...Fonts.style.time,
  },
  txtType: {
    ...Fonts.style.time,
    color: Colors.white,
    backgroundColor: Colors.orange,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
})
