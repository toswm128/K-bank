import axios from "axios";

class UserAPI {
  async siguUp(joinData) {
    const { data } = await axios.post("user/signUp", joinData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  }
  async login(loginData) {
    const { data } = await axios.post("user/login", loginData);
    return data;
  }
  async refreshToken() {
    const { data } = await axios.get(`user/login/token-refresh?${data}`);
    return data;
  }

  async simpleLogin(simpleData) {
    const { data } = await axios.post("user/login/simple", simpleData);
    return data;
  }
  async identity(identityData) {
    const { data } = await axios.post("user/login/identity", identityData);
    return data;
  }
}

export default new UserAPI();
