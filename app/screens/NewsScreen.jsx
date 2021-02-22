import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import newsApi from "../api/news";
import NewsCard from "../components/NewsCard";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import Search from "../components/Search";

export default function News() {
  const getTopHeadlines = () =>
    newsApi
      .getTopHeadlines()
      .then((res) => {
        setNews(res.data.articles);
        setRefreshing(false);
      })
      .catch((e) => console.log(e));

  useEffect(() => {
    getTopHeadlines();
  }, []);

  const [news, setNews] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.header}>Top Headlines</Text>
        <View style={{ marginTop: 5, marginBottom: 40 }}>
          <FlatList
            data={news}
            keyExtractor={(_, i) => i.toString()}
            ItemSeparatorComponent={() => <Separator />}
            onRefresh={() => getTopHeadlines()}
            refreshing={refreshing}
            renderItem={({ item }) => <NewsCard news={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingHorizontal: 20,
  },
  header: {
    color: "#010101d9",
    fontSize: 30,
    fontWeight: "bold",
  },
  small: {
    color: "#010101d9",
    fontSize: 18,
  },
});
