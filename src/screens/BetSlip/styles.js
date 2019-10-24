import { StyleSheet } from 'react-native';

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
    backgroundColor: 'white',
    margin: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  deleteBtn: {
    height: 40,
    width: 100,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
});
