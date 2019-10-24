import { StyleSheet } from 'react-native';
import { GREY, WHITE } from '../../constants/styleConstants';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  listStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '97%',
    backgroundColor: WHITE,
    margin: 5,
    borderWidth: 1,
    borderColor: GREY,
  },
  btnContainer: {
    height: 40,
    width: 100,
    margin: 10,
  },
  deleteBtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: GREY,
    borderWidth: 1,
    borderColor: GREY,
    borderRadius: 10,
  },
});
