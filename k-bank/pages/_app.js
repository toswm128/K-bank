import GlobalStyle from "../styles/GlobalStyle.js";
import { RecoilRoot } from "recoil";
import axios from "axios";
import SERVER from "../config/config.json";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = SERVER.SERVER;
  axios.defaults.headers["Authorization"] = "";

  axios.interceptors.request.use(
    async config => {
      const accessToken = localStorage.getItem("accessToken")
        ? localStorage.getItem("accessToken")
        : false;
      if (accessToken) {
        config.headers.Authorization = accessToken;
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
