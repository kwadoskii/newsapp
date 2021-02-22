import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";

export default function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "tomato",
    height: "7%",
    justifyContent: "center",
    position: "relative",
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
