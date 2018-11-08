import { StyleSheet } from 'react-native';
import ThemeColors from '../../colors/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: ThemeColors.GRAY
  },
  home: {
    alignSelf: 'center',
    height: 550,
    padding: 20,
    fontSize: 18,
    color: ThemeColors.WHITE
  }
});
