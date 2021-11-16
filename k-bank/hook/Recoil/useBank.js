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
      setAccountList(data);
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

  const BankState = {
    accountList,
    isAccountList,
    accountHistory,
    isAccountHistory,
  };

  return { getAccountList, getAccountHistory, BankState };
};

export default useBank;
