import axios from "axios";
import { API_KEY } from "@env";

const config = {
  baseURL: "http://newsapi.org/v2",
  params: {
    country: "ng",
    pageSize: 45,
    apiKey: API_KEY,
  },
};

export default axios.create(config);
