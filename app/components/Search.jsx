import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

// import defaulStyles from "../config/styles";

export default function Search() {
  return (
    <View>
      <Text style={styles.text}>Search</Text>
      <TextInput style={styles.input} placeholder="Search for any news" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#010101d9",
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  input: {
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#fff",
    height: 40,
    padding: 10,
    width: "100%",
  },
});
