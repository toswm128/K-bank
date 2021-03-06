import BankAPI from "../../assets/API/BankAPI";
import { useRecoilState } from "recoil";
import {
  accountHistoryState,
  accountListState,
  isAccountHistoryState,
  isAccountListState,
} from "../../states/Bank/bankState";

const useBank = () => {
  const [accountList, setAccountList] = useRecoilState(accountListState);
  const [isAccountList, setIsAccountList] = useRecoilState(isAccountListState);
  const [accountHistory, setAccountHistory] =
    useRecoilState(accountHistoryState);
  const [isAccountHistory, setIsAccountHistory] = useRecoilState(
    isAccountHistoryState
  );

  const getAccountList = async () => {
    try {
      const data = await BankAPI.getAccountList();
      setAccountList(data.accounts);
      setIsAccountList(true);
    } catch (err) {
      setIsAccountList(false);
      console.log(err.response);
    }
  };

  const getAccountHistory = async (bankId, accountId) => {
    try {
      const data = await BankAPI.getAccountHistory(bankId, accountId);
      setAccountHistory(data);
      setIsAccountHistory(true);
    } catch (err) {
      setIsAccountHistory(false);
      console.log(err.response);
    }
  };

  const tryOpenedAccount = async AccountData => {
    try {
      const data = await BankAPI.postAccount(AccountData);
      return data;
    } catch (err) {
      console.log(err.response);
    }
  };

  const requestTransfer = async transferData => {
    try {
      const data = await BankAPI.remittance(transferData);
      return data;
    } catch (err) {
      console.log(err.response);
    }
  };

  const BankState = {
    accountList,
    isAccountList,
    accountHistory,
    isAccountHistory,
  };

  return {
    getAccountList,
    getAccountHistory,
    tryOpenedAccount,
    requestTransfer,
    BankState,
  };
};

export default useBank;
