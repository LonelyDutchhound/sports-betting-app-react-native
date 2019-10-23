import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import MenuBar from "../components/MenuBar";
import { getData } from '../actions';
import { EventCard } from '../components/EventCard';

class EventList extends Component{
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { events, isFetched } = this.props;
    // console.log( this.props );
    return (
      <View style={ styles.container }>
        <StatusBar hidden={ true }/>
        <MenuBar navigate={ this.props.navigation.toggleDrawer } isSlipOpened={ false }/>
        { isFetched ?
          <FlatList
            style={ styles.list }
            data={ events }
            renderItem={ event => <EventCard name={ event.name }/>}
            keyExtractor={ event => event.id}
          />
          : null
        }
          </View>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    height: '100%',
    width: '100%'
  },
  list:{
    flex: 1,
    flexDirection: 'column'
  }
});

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getData())
  };
};

const mapStateToProps = state => {
  console.log(state);
  return{
    events: state.events,
    isFetched: state.isFetched
  }
};

export default connect( mapStateToProps, mapDispatchToProps )( EventList );