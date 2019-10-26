import { StyleSheet } from 'react-native';
import {
  GREY, WHITE, GREEN, DARKGREY,
} from '../../constants/styleConstants';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  list: {
    flex: 1,
    flexDirection: 'column',
  },
  eventContainer: {
    width: '97%',
    backgroundColor: 'white',
    margin: 5,
    borderWidth: 2,
    borderColor: GREY,
  },
  eventName: {
    padding: 8,
    fontSize: 18,
    textAlign: 'center',
  },
  marketName: {
    padding: 8,
    fontSize: 18,
    color: GREY,
  },
  btn: {
    flex: 0.45,
    flexShrink: 1,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderColor: GREY,
  },
  btnContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: GREY,
    borderRadius: 10,
  },
  btnContainer_sel: {
    width: '100%',
    borderWidth: 1,
    borderColor: GREY,
    borderRadius: 10,
    backgroundColor: GREEN,
  },
  btnText: {
    textAlign: 'center',
    color: DARKGREY,
  },
  textContainer: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: DARKGREY,
  },
  btnsContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
