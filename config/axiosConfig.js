import axios from "axios";

axios.interceptors.request.use((config) => {
  config.headers["Access-Control-Allow-Origin"] = "*";
  config.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";
  config.headers["Access-Control-Allow-Headers"] =
    "Content-Type, Authorization";
  return config;
});
