import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  menu:{
    flex: 0.08,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  navBtn:{
    width: 40,
    height: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
  navBtnText:{
    margin: 5,
    fontWeight: '900',
    color: 'white'
  }
});