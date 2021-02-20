import client from "./client";

const endpoint = "top-headlines";

const getTopHeadlines = () => client.get(endpoint);

export default {
  getTopHeadlines,
};
