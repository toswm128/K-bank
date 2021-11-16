import axios from "axios";

class BankAPI {
  async getAccountList() {
    const { data } = await axios.get("/banking/account");
    return data;
  }

  async getAccountHistory(bankId, accountId) {
    const { data } = await axios.get(
      `/banking/detail/:${bankId}/:${accountId}`
    );
    return data;
  }

  async remittance(remittanceData) {
    const { data } = await axios.post("/banking/transfer", remittanceData);
    return data;
  }
  async checkRemittance() {
    const { data } = await axios.post("/banking/transfer/confirm");
    return data;
  }
}

export default new BankAPI();
