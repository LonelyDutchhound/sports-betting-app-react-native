import React, { useEffect, useCallback } from "react";
import { View, StatusBar, FlatList } from "react-native";
import { connect } from "react-redux";
import MenuBar from "../../components/MenuBar";
import { getData } from "../../actions/getEventsActions";
import { EventCard } from "./EventCard";
import { styles } from "./styles";

const EventList = ({ events, isFetched, getData, navigation }) => {
  useEffect(() => {
    getData();
  }, []);

  const renderItem = useCallback(
    ({ item }) => <EventCard name={item.name} markets={item.markets} />,
    []
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <MenuBar navigate={navigation.toggleDrawer} isSlipOpened={false} />
      {isFetched ? (
        <FlatList
          style={styles.list}
          data={events}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : null}
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getData())
  };
};

const mapStateToProps = state => {
  return {
    events: state.events,
    isFetched: state.isFetched
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);