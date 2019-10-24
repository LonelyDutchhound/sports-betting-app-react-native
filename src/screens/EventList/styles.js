import { StyleSheet } from 'react-native';

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
    borderColor: 'lightgrey',
  },
  eventName: {
    padding: 8,
    fontSize: 18,
    textAlign: 'center',
  },
  marketName: {
    padding: 8,
    fontSize: 18,
    color: 'lightgrey',
  },
  btn: {
    height: 40,
    width: 100,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'grey',
  },
  btn_sel: {
    height: 40,
    width: 100,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  btnContainer: {
    height: 40,
    width: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  btnText: {
    textAlign: 'center',
    color: 'grey',
  },
  textContainer: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: 'lightgrey',
  },
  btnsContainer: {
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
