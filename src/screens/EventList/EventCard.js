import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { MarketCard } from './MarketCard';
import { styles } from './styles';

export const EventCard = ({ name, markets }) => {
  const renderItem = useCallback(
    ({ item }) => <MarketCard name={item.name} selections={item.selections} />,
    [],
  );
  if (markets == false) {
    return null;
  }
  return (
      <View style={styles.eventContainer}>
        <Text style={styles.eventName}>{name}</Text>
        <FlatList
          style={styles.list}
          data={markets}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
  );
};
