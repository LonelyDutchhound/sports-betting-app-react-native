import React from "react";
import { Text, View } from "react-native";
import BetBtn from "./BetBtn";
import { styles } from "./styles";

export const MarketCard = ({ name, selections }) => {
  const betBtn = selections.map(selection => (
    <BetBtn
      name={selection.name}
      price={selection.price}
      id={selection.id}
      key={selection.id}
    />
  ));

  return (
    <View style={styles.textContainer}>
      <Text style={styles.marketName}>{name}</Text>
      <View style={styles.btnsContainer}>{betBtn}</View>
    </View>
  );
};
