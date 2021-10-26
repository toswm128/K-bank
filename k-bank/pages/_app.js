import GlobalStyle from "../styles/GlobalStyle.js";
import { RecoilRoot } from "recoil";
import axios from "axios";
import SERVER from "../config/config.json";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = SERVER.SERVER;
  axios.defaults.headers["Authorization"] = ``;
  axios.defaults.withCredentials = true;

  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
