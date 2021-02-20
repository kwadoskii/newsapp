import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";

export default function Home() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <Text style={styles.small}>
          Please click on the news tab to view top headlines.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  small: {
    color: "#010101d9",
    fontSize: 18,
  },
  text: {
    color: "#010101d9",
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
