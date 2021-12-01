import GlobalStyle from "../styles/GlobalStyle.js";
import { RecoilRoot } from "recoil";
import axios from "axios";
import SERVER from "../config/config.json";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = SERVER.SERVER;
  axios.defaults.headers["access_token"] = "";
  axios.defaults.headers["trade_token"] = "";

  axios.interceptors.request.use(
    async config => {
      const accessToken = localStorage.getItem("accessToken")
        ? localStorage.getItem("accessToken")
        : false;
      const tradeToken = localStorage.getItem("trade_token")
        ? localStorage.getItem("trade_token")
        : false;
      if (accessToken) {
        config.headers.access_token = accessToken;
        config.headers.trade_token = tradeToken;
      }
      console.log(config);
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );

  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
