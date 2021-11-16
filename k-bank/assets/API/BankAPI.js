import axios from "axios";

class BankAPI {
  async getAccountList() {
    const { data } = axios.get("/banking/account");
    return data;
  }

  async getAccountHistory(bankId, accountId) {
    const { data } = axios.get(`/banking/detail/:${bankId}/:${accountId}`);
    return data;
  }

  async remittance(remittanceData) {
    const { data } = axios.post("/banking/transfer", remittanceData);
    return data;
  }
  async checkRemittance() {
    const { data } = axios.post("/banking/transfer/confirm");
    return data;
  }
}

export default new BankAPI();
