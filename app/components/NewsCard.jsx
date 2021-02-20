import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function NewsCard({ news }) {
  const imageUri = news.urlToImage;
  const currentTime = new Date().getHours();
  const diff = currentTime - new Date(news.publishedAt).getHours();

  return (
    news.description &&
    news.urlToImage != null && (
      <TouchableWithoutFeedback style={styles.container}>
        <View style={styles.imageHolder}>
          <ImageBackground
            source={{
              uri: imageUri,
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.textHolder}>
          <View>
            <Text style={styles.textHeader}>{news.title}</Text>
            <Text style={styles.text}>
              {news.description?.length > 125
                ? news.description?.slice(0, 124).trim() + "..."
                : news.description}
            </Text>
          </View>

          <View>
            <Text style={styles.textFooter}>
              {news.source.name} • {diff === 1 ? `${diff} hour ago` : `${diff} hours ago`}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#777",
    borderRadius: 10,
    minHeight: 350,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
  imageHolder: {
    flex: 1.7,
    height: 150,
    width: "100%",
  },
  text: {
    color: "gray",
    fontSize: 14,
    lineHeight: 22,
    marginVertical: 8,
  },
  textFooter: {
    color: "gray",
    fontSize: 10,
  },
  textHeader: {
    fontSize: 19,
  },
  textHolder: {
    backgroundColor: "#fff",
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
    padding: 12,
  },
});
